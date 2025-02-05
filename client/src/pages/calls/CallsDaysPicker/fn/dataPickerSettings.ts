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

export const onCallsDaysPickerChange: DatePickerProps['onChange'] = (fromDate, dates) => {
	useCallsStore.setState({ fromDate: dates[0], toDate: dates[1] })
}

export function getCurrentValuesProp(fromDate: null | string, toDate: null | string): any {
	const currentDate = dayjs().format(dateFormat)

	return [dayjs(fromDate || currentDate, dateFormat), dayjs(toDate || currentDate, dateFormat)]
}

export function getDefaultPickerValueProp() {
	return [dayjs().subtract(1, 'month'), dayjs()] as any
}

export function useGetSetPreviousDay() {
	return useCallback(function () {
		const yesterday = dayjs().subtract(1, 'day').format(dateFormat)

		useCallsStore.setState({ fromDate: yesterday, toDate: yesterday })
	}, [])
}

export function useGetSetThisWeek() {
	return useCallback(function () {
		const monday = dayjs().day(1).format(dateFormat)
		const today = dayjs().format(dateFormat)

		useCallsStore.setState({ fromDate: monday, toDate: today })
	}, [])
}

export function useIsChooseYesterday(fromDate: null | string, toDate: null | string) {
	return useMemo(
		function () {
			if (!fromDate || !toDate) return false

			const yesterday = dayjs().subtract(1, 'day').format(dateFormat)
			return yesterday === fromDate && yesterday === toDate
		},
		[fromDate, toDate],
	)
}

export function useIsChooseThisWeek(fromDate: null | string, toDate: null | string) {
	return useMemo(
		function () {
			if (!fromDate || !toDate) return false

			const monday = dayjs().day(1).format(dateFormat)
			const today = dayjs().format(dateFormat)

			return monday === fromDate && today === toDate
		},
		[fromDate, toDate],
	)
}
