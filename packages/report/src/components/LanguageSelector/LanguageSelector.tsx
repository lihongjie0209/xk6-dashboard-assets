import React, { useState, useRef, useEffect } from "react"
import { useTranslation } from "react-i18next"

import { ReactComponent as GlobeIcon } from "assets/icons/globe.svg"

import * as styles from "./LanguageSelector.css"

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
]

export function LanguageSelector() {
  const { i18n, t } = useTranslation('header')
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLanguage = i18n.language.startsWith('zh') ? 'zh' : 'en'

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode)
    localStorage.setItem('dashboard-language', languageCode)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className={styles.container}>
      <button
        ref={buttonRef}
        className={styles.button}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={t('selectLanguage')}
        title={t('selectLanguage')}
      >
        <GlobeIcon className={styles.icon} />
      </button>

      {isOpen && (
        <div ref={dropdownRef} className={styles.dropdown}>
          {LANGUAGES.map((language) => (
            <button
              key={language.code}
              className={styles.item}
              onClick={() => handleLanguageChange(language.code)}
            >
              <span>{language.label}</span>
              {currentLanguage === language.code && <span className={styles.checkmark}>✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
