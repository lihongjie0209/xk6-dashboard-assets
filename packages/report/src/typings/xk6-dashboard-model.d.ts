import "@xk6-dashboard-assets/model"

import { UIConfig } from "types/config"

declare module "@xk6-dashboard-assets/model" {
  interface Config extends UIConfig {}

  interface Digest {
    config?: UIConfig
  }
}
