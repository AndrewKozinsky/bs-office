import React from 'react'
import dayjs from 'dayjs'
import { Button, DatePicker, Form, Space } from 'antd'
import {
	disabledDate,
	onCallsDaysPickerChange,
	useGetSetPreviousDay,
	useGetSetThisWeek,
	useIsChooseYesterday,
	useIsChooseThisWeek,
} from './fn/dataPickerSettings.ts'

const { RangePicker } = DatePicker

type CallsDaysPickerProps = {
	startDate: null | dayjs.Dayjs
	endDate: null | dayjs.Dayjs
}

function CallsDaysPicker(props: CallsDaysPickerProps) {
	const { startDate, endDate } = props

	const setPreviousDay = useGetSetPreviousDay()
	const setThisWeek = useGetSetThisWeek()

	const isChooseYesterday = useIsChooseYesterday(startDate, endDate)
	const isChooseThisWeek = useIsChooseThisWeek(startDate, endDate)

	return (
		<Form style={{ maxWidth: 600 }}>
			<Form.Item label='Даты' layout='vertical'>
				<Space direction='horizontal'>
					<RangePicker
						disabledDate={disabledDate}
						onChange={onCallsDaysPickerChange as any}
						value={[startDate, endDate]}
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
