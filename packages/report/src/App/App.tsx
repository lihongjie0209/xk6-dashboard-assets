import React from "react"
import { useTranslation } from "react-i18next"
import { Digest } from "@xk6-dashboard-assets/model"

import "theme/global.css"
import { theme } from "theme"
import { toClassName } from "utils"
import { Flex } from "components/Flex"
import { Header } from "components/Header"
import { Tab } from "components/Tab/Tab"

import * as styles from "./App.css"

interface AppProps {
  digest: Digest
}

export default function App({ digest }: AppProps) {
  const { t } = useTranslation('common')

  return (
    <Flex as="main" className={toClassName(theme, styles.main)} direction="column" gap={4}>
      <Header digest={digest} />

      {digest.config.tabs.map((tab) => (
        <Tab key={tab.id} tab={tab} digest={digest} />
      ))}

      <section>
        <hr />
        <p className={styles.usage}>
          {t('usageInstructions')}
        </p>
      </section>
    </Flex>
  )
}
