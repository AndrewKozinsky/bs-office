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
			<UTableHeadRow>
				<UTableHeadCell>Офис</UTableHeadCell>
				<UTableHeadCell>Номер</UTableHeadCell>
				<UTableHeadCell>Клиент</UTableHeadCell>
				<UTableHeadCell>Номер заказа</UTableHeadCell>
				<UTableHeadCell>Дата звонка</UTableHeadCell>
				<UTableHeadCell>Продолжительность звонка</UTableHeadCell>
				<UTableHeadCell>Тип звонка</UTableHeadCell>
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

	return (
		<UTableRow>
			<UTableCell>{cellRecord.out_nomber}</UTableCell>
			<UTableCell>{cellRecord.in_number}</UTableCell>
			<UTableCell>{cellRecord.name_user}</UTableCell>
			<UTableCell>{cellRecord.id_order}</UTableCell>
			<UTableCell>{cellRecord.date_time}</UTableCell>
			<UTableCell>{cellRecord.call_bill_sec}</UTableCell>
			<UTableCell>{cellRecord.call_status}</UTableCell>
		</UTableRow>
	)
}
