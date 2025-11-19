import React from "react"
import { Digest } from "@xk6-dashboard-assets/model"
import { Panel as PanelClass, PanelKind } from "@xk6-dashboard-assets/view"

import Chart from "components/Chart"
import Summary from "components/Summary"

interface PanelProps {
  panel: PanelClass
  digest: Digest
}

export function Panel({ panel, digest }: PanelProps) {
  if (panel.kind == PanelKind.chart) {
    return <Chart panel={panel} digest={digest} />
  }

  if (panel.kind == PanelKind.summary) {
    return <Summary panel={panel} digest={digest} />
  }
}
