import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { usePopper } from "react-popper"

import { useTheme } from "store/theme"
import { Button } from "components/Button"
import { ClickAwayListener } from "components/ClickAwayListener"
import { Flex } from "components/Flex"
import { IconButton } from "components/IconButton"
import { Paper } from "components/Paper"
import { Tooltip } from "components/Tooltip"

import * as styles from "./LanguageSelector.css"

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
]

export function LanguageSelector() {
  const { i18n, t } = useTranslation('header')
  const { theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null)
  const { styles: popperStyles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-end",
    modifiers: [{ name: "offset", options: { offset: [0, 10] } }]
  })

  const currentLanguage = i18n.language.startsWith('zh') ? 'zh' : 'en'

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode)
    localStorage.setItem('dashboard-language', languageCode)
    setIsOpen(false)
  }

  return (
    <>
      <Tooltip placement="bottom" title={t('selectLanguage')}>
        <IconButton
          ref={setReferenceElement}
          aria-expanded={isOpen ? "true" : "false"}
          aria-label={t('selectLanguage')}
          name="globe"
          variant="text"
          onClick={() => setIsOpen(!isOpen)}
        />
      </Tooltip>

      {isOpen && (
        <ClickAwayListener onClickAway={() => setIsOpen(false)}>
          <Paper
            {...attributes.popper}
            ref={setPopperElement}
            className={styles.popper[theme]}
            style={popperStyles.popper}
            onMouseLeave={() => setIsOpen(false)}>
            <Flex direction="column" gap={0}>
              {LANGUAGES.map((language) => (
                <Button
                  key={language.code}
                  variant="text"
                  onClick={() => handleLanguageChange(language.code)}>
                  <Flex className={styles.item} align="center" justify="space-between" gap={3}>
                    <span>{language.label}</span>
                    {currentLanguage === language.code && <span className={styles.checkmark}>✓</span>}
                  </Flex>
                </Button>
              ))}
            </Flex>
          </Paper>
        </ClickAwayListener>
      )}
    </>
  )
}
