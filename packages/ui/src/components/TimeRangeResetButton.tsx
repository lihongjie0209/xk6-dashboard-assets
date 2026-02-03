import React from "react"
import { useTranslation } from "react-i18next"

import { useTimeRange } from "store/timeRange"
import { Button } from "components/Button"
import { Flex } from "components/Flex"
import { Icon } from "components/Icon"

export const TimeRangeResetButton = () => {
  const { timeRange, setTimeRange } = useTimeRange()
  const { t } = useTranslation('common')

  if (!timeRange) {
    return null
  }

  return (
    <Button variant="outline" onClick={() => setTimeRange(undefined)}>
      <Flex align="center" gap={2}>
        <Icon name="rewind-time" />
        <span>{t('reset')}</span>
      </Flex>
    </Button>
  )
}
