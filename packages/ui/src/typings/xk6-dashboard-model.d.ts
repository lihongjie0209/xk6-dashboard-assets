import { Param } from "@xk6-dashboard-assets/model"

import type { UIConfig } from "types/config"

declare module "@xk6-dashboard-assets/model" {
  interface Config extends UIConfig {}

  interface Digest {
    config?: UIConfig
    param: Param & { period: number }
  }
}
