import React, { type ReactNode } from "react"
import { useTranslation } from "react-i18next"

import { Flex } from "components/Flex"
import { Icon } from "components/Icon"

import * as styles from "./LoadingContainer.css"

interface LoadingContainerProps {
  children: ReactNode
  message?: string
  isLoading: boolean
}

export function LoadingContainer({ children, message, isLoading }: LoadingContainerProps) {
  const { t } = useTranslation('common')
  
  if (!isLoading) {
    return children
  }

  return (
    <Flex align="center" justify="center">
      <Icon className={styles.icon} name="spinner" />
      <h2>{message || t('loading')}</h2>
    </Flex>
  )
}
