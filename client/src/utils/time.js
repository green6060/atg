import moment from 'moment'

export const formatDateDisplay = (date, format = 'MM/DD/YYYY') => {
  const offset = (new Date()).getTimezoneOffset()/60
  return moment(date).utc().subtract(offset, 'hours').format(format)
}

export const formatDateForm = (date) => {
  const offset = (new Date()).getTimezoneOffset()/60
  return moment(date).utc().subtract(offset, 'hours').format('YYYY-MM-DD')
}