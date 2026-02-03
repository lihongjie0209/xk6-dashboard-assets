import React from "react"
import { useTranslation } from "react-i18next"

import { Button } from "components/Button"
import { Flex } from "components/Flex"

import * as styles from "./Nav.css"
import { toClassName } from "utils"

interface Option {
  title?: string
  id?: string
}

interface NavProps {
  options: Option[]
  value: number
  onChange: (idx: number) => void
}

export function Nav({ options, value, onChange }: NavProps) {
  return (
    <nav className={toClassName(styles.nav)}>
      <Flex gap={2}>
        {options.map((option, index) => (
          <Item key={option.id} label={option.title} index={index} value={value} onChange={onChange} />
        ))}
      </Flex>
    </nav>
  )
}

interface ItemProps {
  index: number
  label?: string
  value: number
  onChange: (idx: number) => void
}

function Item({ index, label, value, onChange, ...props }: ItemProps) {
  const { t } = useTranslation('header')
  const isActive = index === value
  const state = isActive ? "active" : "inactive"
  
  // Translate common tab names
  const translatedLabel = label === 'Overview' ? t('tabOverview') 
    : label === 'Timings' ? t('tabTimings')
    : label === 'Summary' ? t('tabSummary')
    : label

  return (
    <Button aria-current={isActive} className={styles.item[state]} variant="text" onClick={() => onChange(index)} {...props}>
      {translatedLabel}
    </Button>
  )
}
