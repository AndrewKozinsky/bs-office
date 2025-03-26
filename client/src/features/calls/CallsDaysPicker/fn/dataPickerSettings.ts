import { useCallback, useMemo } from 'react'
import { DatePicker, DatePickerProps, GetProps } from 'antd'
import dayjs from 'dayjs'
import { useCallsStore } from '../../callsStore/callsStore.ts'
import { convertDayJsToString } from '../../common.ts'

type RangePickerProps = GetProps<typeof DatePicker.RangePicker>

// Определяет заблокированную дату
export const disabledDate: RangePickerProps['disabledDate'] = (current) => {
	// Can not select days before today and today
	return current && current > dayjs()
}

export const onCallsDaysPickerChange: DatePickerProps['onChange'] = (dates, stringDates) => {
	let startDate: null | dayjs.Dayjs = null
	let endDate: null | dayjs.Dayjs = null

	if (dates) {
		startDate = dates[0]
		endDate = dates[1]
	}

	useCallsStore.setState({ startDate, endDate })
}

export function useGetSetPreviousDay() {
	return useCallback(function () {
		const yesterday = dayjs().subtract(1, 'day')

		useCallsStore.setState({ startDate: yesterday, endDate: yesterday })
	}, [])
}

export function useGetSetThisWeek() {
	return useCallback(function () {
		const monday = dayjs().day(1)
		const today = dayjs()

		useCallsStore.setState({ startDate: monday, endDate: today })
	}, [])
}

export function useIsChooseYesterday(startDate: null | dayjs.Dayjs, endDate: null | dayjs.Dayjs) {
	return useMemo(
		function () {
			if (!startDate || !endDate) return false

			const yesterday = dayjs().subtract(1, 'day')
			return (
				convertDayJsToString(yesterday) === convertDayJsToString(startDate) &&
				convertDayJsToString(yesterday) === convertDayJsToString(endDate)
			)
		},
		[startDate, endDate],
	)
}

export function useIsChooseThisWeek(startDate: null | dayjs.Dayjs, endDate: null | dayjs.Dayjs) {
	return useMemo(
		function () {
			if (!startDate || !endDate) return false

			const monday = dayjs().day(1)
			const today = dayjs()

			return (
				convertDayJsToString(monday) === convertDayJsToString(startDate) &&
				convertDayJsToString(today) === convertDayJsToString(endDate)
			)
		},
		[startDate, endDate],
	)
}
