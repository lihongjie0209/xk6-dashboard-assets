export const omitUndefined = <T extends object>(styles: T) => {
  return Object.entries(styles).reduce(
    (props, [prop, value]) => (value === undefined ? props : { ...props, [prop]: value }),
    {}
  )
}
