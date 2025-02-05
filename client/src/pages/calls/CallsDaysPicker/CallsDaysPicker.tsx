import React from 'react'
import { Button, DatePicker, Form, Space } from 'antd'
import {
	disabledDate,
	getDefaultPickerValueProp,
	getCurrentValuesProp,
	onCallsDaysPickerChange,
	useGetSetPreviousDay,
	useGetSetThisWeek,
	useIsChooseYesterday,
	useIsChooseThisWeek,
} from './fn/dataPickerSettings.ts'

const { RangePicker } = DatePicker

type CallsDaysPickerProps = {
	fromDate: null | string
	toDate: null | string
}

function CallsDaysPicker(props: CallsDaysPickerProps) {
	const { fromDate, toDate } = props

	const currentValues = getCurrentValuesProp(fromDate, toDate)
	const setPreviousDay = useGetSetPreviousDay()
	const setThisWeek = useGetSetThisWeek()

	const isChooseYesterday = useIsChooseYesterday(fromDate, toDate)
	const isChooseThisWeek = useIsChooseThisWeek(fromDate, toDate)

	return (
		<Form style={{ maxWidth: 600 }}>
			<Form.Item label='Даты' layout='vertical'>
				<Space direction='horizontal'>
					<RangePicker
						defaultPickerValue={getDefaultPickerValueProp()}
						disabledDate={disabledDate}
						onChange={onCallsDaysPickerChange as any}
						value={currentValues}
					/>
					<Button onClick={setPreviousDay} disabled={isChooseYesterday}>
						Вчера
					</Button>
					<Button onClick={setThisWeek} disabled={isChooseThisWeek}>
						Эта неделя
					</Button>
				</Space>
			</Form.Item>
		</Form>
	)
}

export default CallsDaysPicker
