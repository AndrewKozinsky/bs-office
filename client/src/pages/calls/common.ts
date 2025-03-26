import dayjs from 'dayjs'

export function convertDayJsToString(date: null | dayjs.Dayjs) {
	if (!date) return null

	const dateFormat = 'YYYY-MM-DD'
	return date.format(dateFormat)
}
