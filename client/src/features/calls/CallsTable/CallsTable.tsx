import dayjs from 'dayjs'
import React from 'react'
import { Button } from 'antd'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import LoadingInCenter from '../../../common/components/LoadingInCenter/LoadingInCenter.tsx'
import {
	UTable,
	UTableCell,
	UTableHeadCell,
	UTableHeadRow,
	UTableRow,
} from '../../../common/components/UTable/UTable.tsx'
import { pagesRoute } from '../../../pages/pagesRoute.ts'
import CallsApiTypes from '../../../requests/calls/callsApiTypes.ts'
import { callsQuery } from '../../../requests/calls/callsQuery.ts'
import { convertDayJsToString } from '../common.ts'
import { useIsRowSelected } from './fn/isRowSelected.ts'
import { useGetOnClientNameClick } from './fn/onClientNameClick.ts'
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

type IPassRecordData = (data: { recordName: string; date: string }) => void

type CallsTableProps = {
	startDate: null | dayjs.Dayjs
	endDate: null | dayjs.Dayjs
	searchValue: string
	passRecordData: IPassRecordData
}

function CallsTable(props: CallsTableProps) {
	const { startDate, endDate, searchValue, passRecordData } = props

	const getRecordsRes = callsQuery
		.getRecords({ startDate: convertDayJsToString(startDate), endDate: convertDayJsToString(endDate), searchValue })
		.useQuery()

	if (getRecordsRes.isLoading) {
		return <LoadingInCenter />
	}

	if (getRecordsRes.error) {
		return <p>Во время запроса произошла ошибка.</p>
	}

	if (!getRecordsRes.data) {
		return <p>Нет данных для отображения.</p>
	}

	return (
		<UTable block>
			<UTableHeadRow sticky>
				<UTableHeadCell>Дата</UTableHeadCell>
				<UTableHeadCell>Клиент</UTableHeadCell>
				<UTableHeadCell>Номер заказа</UTableHeadCell>
				<UTableHeadCell>Офис</UTableHeadCell>
				<UTableHeadCell>Номер</UTableHeadCell>
				<UTableHeadCell>Длительность</UTableHeadCell>
				<UTableHeadCell>Тип</UTableHeadCell>
			</UTableHeadRow>
			{getRecordsRes.data.map((cellRecord, i) => {
				return <CallTableRow cellRecord={cellRecord} passRecordData={passRecordData} key={i} />
			})}
		</UTable>
	)
}

export default CallsTable

type CallTableRowProps = {
	cellRecord: CallsApiTypes.CallRecord
	passRecordData: IPassRecordData
}

function CallTableRow(props: CallTableRowProps) {
	const { cellRecord, passRecordData } = props

	const preparedData = prepareCellRecordData(cellRecord)
	const isRowSelected = useIsRowSelected(preparedData)

	return (
		<UTableRow isRowSelected={isRowSelected}>
			<DateCell preparedData={preparedData} />
			<ClientNameCell preparedData={preparedData} />
			<OrderCell preparedData={preparedData} />
			<UTableCell>{preparedData.office}</UTableCell>
			<UTableCell>{preparedData.phoneNumber}</UTableCell>
			<UTableCell>
				{preparedData.humanReadableDuration === '0 сек.' ? (
					<span className='calls-table__zero-duration'>{preparedData.humanReadableDuration}</span>
				) : (
					preparedData.humanReadableDuration
				)}
			</UTableCell>
			<CallStatusCell preparedData={preparedData} passRecordData={passRecordData} />
		</UTableRow>
	)
}

type CellProps = {
	preparedData: PhoneRecordPreparedData
}

function DateCell(props: CellProps) {
	const { preparedData } = props

	let dateElem = <span className='calls-table__day-rect'>{preparedData.humanReadableDate}</span>
	if (preparedData.humanReadableDate === 'сегодня') {
		dateElem = <span className='calls-table__today-rect'>{preparedData.humanReadableDate}</span>
	} else if (preparedData.humanReadableDate === 'вчера') {
		dateElem = <span className='calls-table__yesterday-rect'>{preparedData.humanReadableDate}</span>
	}

	return (
		<UTableCell>
			<p className='calls-table__date-wrapper'>
				{dateElem}
				{preparedData.time}
			</p>
		</UTableCell>
	)
}

function ClientNameCell(props: CellProps) {
	const { clientName } = props.preparedData

	const onClientNameClick = useGetOnClientNameClick(clientName)

	if (!clientName) {
		return <UTableCell />
	}

	return (
		<UTableCell>
			<span onClick={onClientNameClick} className='link'>
				{clientName}
			</span>
		</UTableCell>
	)
}

function OrderCell(props: CellProps) {
	const { preparedData } = props

	if (!preparedData.orderPrefix || !preparedData.orderNum) {
		return <UTableCell>{preparedData.orderNumFull}</UTableCell>
	}

	let orderNumHref = preparedData.orderNum.toString()
	orderNumHref = orderNumHref.slice(1)
	orderNumHref = pagesRoute.order(orderNumHref).path

	return (
		<UTableCell>
			<Link to={orderNumHref} className='link'>
				<span className='calls-table__order-prefix'>{preparedData.orderPrefix}-</span>
				{preparedData.orderNum}
			</Link>
		</UTableCell>
	)
}

type CallStatusCellProps = {
	preparedData: PhoneRecordPreparedData
	passRecordData: IPassRecordData
}

function CallStatusCell(props: CallStatusCellProps) {
	const { preparedData, passRecordData } = props

	const isButtonDisabled = !preparedData.recordFileName || !preparedData.rawDate || preparedData.isZeroDuration

	const iconMap = {
		Входящий__ANSWERED: (
			<span title='Клиенту ответилили'>
				<IncomingAnsweredIcon className='calls-table__call-icon' />
			</span>
		),
		Исходящий__ANSWERED: (
			<span title='Клиент ответил'>
				<OutgoingAnsweredIcon className='calls-table__call-icon' />
			</span>
		),
		Внутренний__ANSWERED: (
			<span title='Сотрудник ответил сотруднику'>
				<InsideAnsweredIcon className='calls-table__call-icon' />
			</span>
		),

		'Входящий__NO ANSWER': (
			<span title='Клиенту не ответили'>
				<IncomingNoAnsweredIcon className='calls-table__call-icon' />
			</span>
		),
		'Исходящий__NO ANSWER': (
			<span title='Клиент не ответил'>
				<OutgoingNoAnsweredIcon className='calls-table__call-icon' />
			</span>
		),
		'Внутренний__NO ANSWER': (
			<span title='Сотрудник не ответил сотруднику'>
				<InsideNoAnsweredIcon className='calls-table__call-icon' />
			</span>
		),

		Входящий__FAILED: (
			<span title='Клиент позвонил на недоступный телефон'>
				<IncomingFailedIcon className='calls-table__call-icon' />
			</span>
		),
		Исходящий__FAILED: (
			<span title='У клиента телефон не доступен'>
				<OutgoingFailedIcon className='calls-table__call-icon' />
			</span>
		),
		Внутренний__FAILED: null,

		Входящий__BUSY: (
			<span title='Клиент позвонил на занятый телефон'>
				<IncomingFailedIcon className='calls-table__call-icon' />
			</span>
		),
		Исходящий__BUSY: (
			<span title='У клиента телефон занят'>
				<OutgoingFailedIcon className='calls-table__call-icon' />
			</span>
		),
		Внутренний__BUSY: null,
	}

	return (
		<UTableCell>
			<Button
				onClick={() => {
					passRecordData({ recordName: preparedData.recordFileName, date: preparedData.rawDate })
				}}
				disabled={isButtonDisabled}
				className={cn(isButtonDisabled && 'calls-table__call-button--disabled')}
				type='text'
			>
				{iconMap[preparedData.callType + '__' + preparedData.callStatus]}
			</Button>
		</UTableCell>
	)
}
