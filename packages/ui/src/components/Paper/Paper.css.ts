import { style } from "@vanilla-extract/css"

import { vars } from "theme"

export const styles = style({
  backgroundColor: vars.colors.secondary.main,
  borderRadius: vars.borderRadius.md,
  padding: vars.sizes.size8
})
