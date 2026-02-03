import { formatDateTime } from "../../utils/i18n"

export const toDate = (date?: Date) => {
  if (!date) {
    return
  }

  return formatDateTime(new Date(date), {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  })
}
