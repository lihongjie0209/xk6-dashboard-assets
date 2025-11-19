import { Section } from "@xk6-dashboard-assets/view"

export interface Tab {
  title?: string
  id?: string
  summary?: string
  report?: boolean
  sections: Section[]
}

export interface UIConfig {
  title: string
  tabs: Tab[]
}
