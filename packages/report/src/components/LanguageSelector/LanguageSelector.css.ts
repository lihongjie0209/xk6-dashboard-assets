import { style } from "@vanilla-extract/css"
import { vars } from "theme"

export const container = style({
  position: "relative",
  display: "inline-block"
})

export const button = style({
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: vars.colors.text.primary,
  ":hover": {
    opacity: 0.8
  }
})

export const icon = style({
  width: "20px",
  height: "20px"
})

export const dropdown = style({
  position: "absolute",
  top: "calc(100% + 8px)",
  right: 0,
  backgroundColor: vars.colors.common.white,
  border: `1px solid ${vars.colors.primary.main}`,
  borderRadius: "4px",
  minWidth: "150px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  zIndex: 1000
})

export const item = style({
  width: "100%",
  padding: "10px 16px",
  border: "none",
  background: "none",
  textAlign: "left",
  cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: vars.sizes.size5,
  color: vars.colors.text.primary,
  ":hover": {
    backgroundColor: vars.colors.text.hover,
    color: vars.colors.common.white
  },
  ":first-child": {
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px"
  },
  ":last-child": {
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px"
  }
})

export const checkmark = style({
  color: vars.colors.text.primary,
  fontWeight: "bold"
})
