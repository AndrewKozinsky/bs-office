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
import { IncomingAnsweredIcon } from './icons/IncomingAnsweredIcon.tsx'
import { IncomingFailedIcon } from './icons/IncomingFailedIcon.tsx'
import { IncomingNoAnsweredIcon } from './icons/IncomingNoAnsweredIcon.tsx'
import { InsideAnsweredIcon } from './icons/InsideAnsweredIcon.tsx'
import { OutgoingAnsweredIcon } from './icons/OutgoingAnsweredIcon.tsx'
import { OutgoingFailedIcon } from './icons/OutgoingFailedIcon.tsx'
import { OutgoingNoAnsweredIcon } from './icons/OutgoingNoAnsweredIcon.tsx'
import { InsideNoAnsweredIcon } from './icons/InsideNoAnsweredIcon.tsx'
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
	console.log(callsArr)

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
			<CallStatusCell preparedData={preparedData} />
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
			<span className='calls-table__order-prefix'>{preparedData.orderPrefix}-</span>
			{preparedData.orderNum}
		</UTableCell>
	)
}

type CallStatusCellProps = {
	preparedData: PhoneRecordPreparedData
}

function CallStatusCell(props: CallStatusCellProps) {
	const { preparedData } = props

	if (preparedData.clientName.includes('Есмейкон Виталий Владимирович')) {
		console.log(preparedData)
	}

	const iconMap = {
		Входящий__ANSWERED: (
			<span title='Клиенту ответилили'>
				<IncomingAnsweredIcon />
			</span>
		),
		Исходящий__ANSWERED: (
			<span title='Клиент ответил'>
				<OutgoingAnsweredIcon />
			</span>
		),
		Внутренний__ANSWERED: (
			<span title='Сотрудник ответил сотруднику'>
				<InsideAnsweredIcon />
			</span>
		),

		'Входящий__NO ANSWER': (
			<span title='Клиенту не ответили'>
				<IncomingNoAnsweredIcon />
			</span>
		),
		'Исходящий__NO ANSWER': (
			<span title='Клиент не ответил'>
				<OutgoingNoAnsweredIcon />
			</span>
		),
		'Внутренний__NO ANSWER': (
			<span title='Сотрудник не ответил сотруднику'>
				<InsideNoAnsweredIcon />
			</span>
		),

		Входящий__FAILED: (
			<span title='Клиент позвонил на недоступный телефон'>
				<IncomingFailedIcon />
			</span>
		),
		Исходящий__FAILED: (
			<span title='У клиента телефон не доступен'>
				<OutgoingFailedIcon />
			</span>
		),
		Внутренний__FAILED: null,

		Входящий__BUSY: (
			<span title='Клиент позвонил на занятый телефон'>
				<IncomingFailedIcon />
			</span>
		),
		Исходящий__BUSY: (
			<span title='У клиента телефон занят'>
				<OutgoingFailedIcon />
			</span>
		),
		Внутренний__BUSY: null,
	}

	return <UTableCell>{iconMap[preparedData.callType + '__' + preparedData.callStatus]}</UTableCell>
}
