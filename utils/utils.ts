
export const formatDateAsUTC = (date: number | undefined): string => {
  if (!date) return '';
  return new Date(date).toISOString().replace('T', ' ').replace('Z', ' (UTC)')
}