import React from "react"

import { toClassName } from "utils"

import * as styles from "./Divider.css"

interface DividerProps {
  className?: string
}

export const Divider = ({ className, ...props }: DividerProps) => {
  return <div className={toClassName(styles.divider, className)} {...props} />
}
