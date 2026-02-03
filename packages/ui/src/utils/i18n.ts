import i18n from '../i18n'

/**
 * Format a date according to the current locale
 */
export function formatDate(date: Date | number, options?: Intl.DateTimeFormatOptions): string {
  const locale = i18n.language === 'zh' ? 'zh-CN' : 'en-US'
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    ...options,
  }
  return new Intl.DateTimeFormat(locale, defaultOptions).format(date)
}

/**
 * Format a date and time according to the current locale
 */
export function formatDateTime(date: Date | number, options?: Intl.DateTimeFormatOptions): string {
  const locale = i18n.language === 'zh' ? 'zh-CN' : 'en-US'
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    ...options,
  }
  return new Intl.DateTimeFormat(locale, defaultOptions).format(date)
}

/**
 * Format a number according to the current locale
 */
export function formatNumber(value: number, options?: Intl.NumberFormatOptions): string {
  const locale = i18n.language === 'zh' ? 'zh-CN' : 'en-US'
  return new Intl.NumberFormat(locale, options).format(value)
}

/**
 * Format a number as a percentage
 */
export function formatPercent(value: number, decimals: number = 1): string {
  const locale = i18n.language === 'zh' ? 'zh-CN' : 'en-US'
  return new Intl.NumberFormat(locale, {
    style: 'percent',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value)
}

/**
 * Format a duration in milliseconds to a human-readable string
 */
export function formatDuration(ms: number): string {
  if (ms < 1000) {
    return `${ms}ms`
  }
  
  const seconds = Math.floor(ms / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 0) {
    const remainingHours = hours % 24
    return remainingHours > 0 ? `${days}d ${remainingHours}h` : `${days}d`
  }
  
  if (hours > 0) {
    const remainingMinutes = minutes % 60
    return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`
  }
  
  if (minutes > 0) {
    const remainingSeconds = seconds % 60
    return remainingSeconds > 0 ? `${minutes}m ${remainingSeconds}s` : `${minutes}m`
  }
  
  return `${seconds}s`
}

/**
 * Format bytes to human-readable size
 */
export function formatBytes(bytes: number, decimals: number = 2): string {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}
