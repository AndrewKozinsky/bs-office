import React from 'react'
import { Button, DatePicker, Form, Space } from 'antd'
import {
	disabledDate,
	getDefaultPickerValueProp,
	getDefaultValuesProp,
	onCallsDaysPickerChange,
	useGetSetPreviousDay,
} from './fn/dataPickerSettings.ts'

const { RangePicker } = DatePicker

type CallsDaysPickerProps = {
	fromDate: null | string
	toDate: null | string
}

function CallsDaysPicker(props: CallsDaysPickerProps) {
	const { fromDate, toDate } = props

	const defaultValues = getDefaultValuesProp(fromDate, toDate)
	const setPreviousDay = useGetSetPreviousDay()

	return (
		<Form style={{ maxWidth: 600 }}>
			<Form.Item label='Даты' layout='vertical'>
				<Space direction='horizontal'>
					<RangePicker
						defaultPickerValue={getDefaultPickerValueProp()}
						defaultValue={defaultValues}
						disabledDate={disabledDate}
						onChange={onCallsDaysPickerChange as any}
					/>
					<Button onClick={setPreviousDay}>Вчера</Button>
					<Button>Эта неделя</Button>
				</Space>
			</Form.Item>
		</Form>
	)
}

export default CallsDaysPicker
