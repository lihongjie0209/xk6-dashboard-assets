import { style } from "@vanilla-extract/css"

import { vars } from "theme"
import { sizes } from "theme/sizes.css"

export const header = style({
  marginLeft: "-4px",
  marginBottom: vars.sizes.size8
})

export const icon = style({
  position: "relative",
  top: "-1px"
})

export const panel = style({
  "@media": {
    [`(min-width: ${sizes.lg})`]: {
      padding: vars.sizes.size8
    }
  }
})
