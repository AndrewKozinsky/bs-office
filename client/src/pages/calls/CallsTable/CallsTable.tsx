import React from 'react'
import LoadingAnimation from '../../../common/components/LoadingAnimation/LoadingAnimation.tsx'
import {
	UTable,
	UTableCell,
	UTableHeadCell,
	UTableHeadRow,
	UTableRow,
} from '../../../common/components/UTable/UTable.tsx'
import CallsApiTypes from '../../../requests/calls/callsApiTypes.ts'
import { useFetchCalls } from './fn/fetchCallsData.ts'
import { PhoneRecordPreparedData, prepareCellRecordData } from './fn/textTransform.ts'
import './CallsTable.scss'

type CallsTableProps = {
	startDate: null | string
	endDate: null | string
	searchNumberValue: string
}

function CallsTable(props: CallsTableProps) {
	const { startDate, endDate, searchNumberValue } = props

	const callsArr = useFetchCalls({ startDate, endDate, searchNumberValue })

	if (!callsArr) {
		return <LoadingAnimation />
	}

	return (
		<UTable block>
			<UTableHeadRow sticky>
				<UTableHeadCell>Офис</UTableHeadCell>
				<UTableHeadCell>Номер</UTableHeadCell>
				<UTableHeadCell>Клиент</UTableHeadCell>
				<UTableHeadCell>Номер заказа</UTableHeadCell>
				<UTableHeadCell>Дата</UTableHeadCell>
				<UTableHeadCell>Длительность</UTableHeadCell>
				<UTableHeadCell>Тип</UTableHeadCell>
			</UTableHeadRow>
			{callsArr.map((cellRecord, i) => {
				return <CallTableRow cellRecord={cellRecord} key={i} />
			})}
		</UTable>
	)
}

export default CallsTable

type CallTableRowProps = {
	cellRecord: CallsApiTypes.CallRecord
}

function CallTableRow(props: CallTableRowProps) {
	const { cellRecord } = props

	const preparedData = prepareCellRecordData(cellRecord)

	return (
		<UTableRow>
			<UTableCell>{preparedData.office}</UTableCell>
			<UTableCell>{preparedData.phoneNumber}</UTableCell>
			<UTableCell>{preparedData.clientName}</UTableCell>
			<OrderCell preparedData={preparedData} />
			<DateCell preparedData={preparedData} />
			<UTableCell align='right'>
				{preparedData.duration === '0 сек.' ? (
					<span className='calls-table__zero-duration'>{preparedData.duration}</span>
				) : (
					preparedData.duration
				)}
			</UTableCell>
			<UTableCell>{preparedData.callType}</UTableCell>
		</UTableRow>
	)
}

type DateCellProps = {
	preparedData: PhoneRecordPreparedData
}

function DateCell(props: DateCellProps) {
	const { preparedData } = props

	let dateElem = <span className='calls-table__day-rect'>{preparedData.date}</span>
	if (preparedData.date === 'сегодня') {
		dateElem = <span className='calls-table__today-rect'>{preparedData.date}</span>
	} else if (preparedData.date === 'вчера') {
		dateElem = <span className='calls-table__yesterday-rect'>{preparedData.date}</span>
	}

	return (
		<UTableCell>
			<p>{dateElem}</p>
			<p>{preparedData.time}</p>
		</UTableCell>
	)
}

type OrderCellProps = {
	preparedData: PhoneRecordPreparedData
}

function OrderCell(props: OrderCellProps) {
	const { preparedData } = props

	if (!preparedData.orderPrefix || !preparedData.orderNum) {
		return <UTableCell>{preparedData.orderNumFull}</UTableCell>
	}

	return (
		<UTableCell>
			<span className='calls-table__order-prefix'>{preparedData.orderPrefix}</span>-{preparedData.orderNum}
		</UTableCell>
	)
}
