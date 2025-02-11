import { useCallback, useMemo } from 'react'
import { DatePicker, DatePickerProps, GetProps } from 'antd'
import dayjs from 'dayjs'
import { useCallsStore } from '../../callsStore/callsStore.ts'

const dateFormat = 'YYYY-MM-DD'
type RangePickerProps = GetProps<typeof DatePicker.RangePicker>

// Определяет заблокированную дату
export const disabledDate: RangePickerProps['disabledDate'] = (current) => {
	// Can not select days before today and today
	return current && current > dayjs()
}

export const onCallsDaysPickerChange: DatePickerProps['onChange'] = (startDate, dates) => {
	useCallsStore.setState({ startDate: dates[0], endDate: dates[1] })
}

export function getCurrentValuesProp(startDate: null | string, endDate: null | string): any {
	const currentDate = dayjs().format(dateFormat)

	return [dayjs(startDate || currentDate, dateFormat), dayjs(endDate || currentDate, dateFormat)]
}

export function useGetSetPreviousDay() {
	return useCallback(function () {
		const yesterday = dayjs().subtract(1, 'day').format(dateFormat)

		useCallsStore.setState({ startDate: yesterday, endDate: yesterday })
	}, [])
}

export function useGetSetThisWeek() {
	return useCallback(function () {
		const monday = dayjs().day(1).format(dateFormat)
		const today = dayjs().format(dateFormat)

		useCallsStore.setState({ startDate: monday, endDate: today })
	}, [])
}

export function useIsChooseYesterday(startDate: null | string, endDate: null | string) {
	return useMemo(
		function () {
			if (!startDate || !endDate) return false

			const yesterday = dayjs().subtract(1, 'day').format(dateFormat)
			return yesterday === startDate && yesterday === endDate
		},
		[startDate, endDate],
	)
}

export function useIsChooseThisWeek(startDate: null | string, endDate: null | string) {
	return useMemo(
		function () {
			if (!startDate || !endDate) return false

			const monday = dayjs().day(1).format(dateFormat)
			const today = dayjs().format(dateFormat)

			return monday === startDate && today === endDate
		},
		[startDate, endDate],
	)
}
