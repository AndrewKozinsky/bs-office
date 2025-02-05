import { DatePicker, DatePickerProps, GetProps } from 'antd'
import dayjs from 'dayjs'
import { useCallback } from 'react'
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

export function getDefaultValuesProp(fromDate: null | string, toDate: null | string): any {
	const currentDate = dayjs().format(dateFormat)

	return [dayjs(fromDate || currentDate, dateFormat), dayjs(toDate || currentDate, dateFormat)]
}

export function getDefaultPickerValueProp() {
	return [dayjs().subtract(1, 'month'), dayjs()] as any
}

export function useGetSetPreviousDay() {
	return useCallback(function () {
		const prevDay = dayjs().subtract(1, 'day').format(dateFormat)

		useCallsStore.setState({ fromDate: prevDay, toDate: prevDay })
	}, [])
}
