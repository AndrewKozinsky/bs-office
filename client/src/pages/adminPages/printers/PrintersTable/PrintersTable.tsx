import React from 'react'
import { Typography } from 'antd'
import LoadingAnimation from '../../../../common/components/LoadingAnimation/LoadingAnimation.tsx'
import {
	UTable,
	UTableCell,
	UTableHeadCell,
	UTableHeadRow,
	UTableRow,
} from '../../../../common/components/UTable/UTable.tsx'
import { printersQuery } from '../../../../requests/printers/printersQuery.ts'
import { Printer } from '../../../../types/user.ts'
import DeletePrinterButton from '../DeletePrinterButton/DeletePrinterButton.tsx'
import EditPrinterButtonAndModal from '../editPrinter/EditPrinterButtonAndModal/EditPrinterButtonAndModal.tsx'
import './PrintersTable.scss'

const { Text } = Typography

function PrintersTable() {
	const getPrintersRes = printersQuery.getPrinters().useQuery()

	if (getPrintersRes.isLoading) {
		return <LoadingAnimation />
	}

	if (getPrintersRes.error) {
		return <p>Во время запроса произошла ошибка.</p>
	}

	if (!getPrintersRes.data) {
		return <p>Нет данных для отображения.</p>
	}

	return (
		<UTable block>
			<UTableHeadRow sticky>
				<UTableHeadCell>ID</UTableHeadCell>
				<UTableHeadCell>Местоположение</UTableHeadCell>
				<UTableHeadCell>Имя принтера</UTableHeadCell>
				<UTableHeadCell>Адрес принтера</UTableHeadCell>
				<UTableHeadCell />
			</UTableHeadRow>
			{getPrintersRes.data.map((printer) => {
				return <PrintersTableRow printer={printer} key={printer.printer_id} />
			})}
		</UTable>
	)
}

export default PrintersTable

type PrintersTableRowProps = {
	printer: Printer
}

function PrintersTableRow(props: PrintersTableRowProps) {
	const { printer } = props

	return (
		<UTableRow>
			<UTableCell>
				<Text className='calls-table__date-wrapper'>{printer.printer_id}</Text>
			</UTableCell>
			<UTableCell>
				<Text className='calls-table__date-wrapper'>{printer.printer_location}</Text>
			</UTableCell>
			<UTableCell>
				<Text className='calls-table__date-wrapper'>{printer.printer_name}</Text>
			</UTableCell>
			<UTableCell>
				<Text className='calls-table__date-wrapper'>{printer.printer_url}</Text>
			</UTableCell>
			<ControlButtonsRow printerData={printer} />
		</UTableRow>
	)
}

type ControlButtonsRowProps = {
	printerData: Printer
}

function ControlButtonsRow(props: ControlButtonsRowProps) {
	const { printerData } = props

	return (
		<UTableCell className='printers-table__control-buttons-wrapper'>
			<EditPrinterButtonAndModal printer={printerData} />
			<DeletePrinterButton printer={printerData} />
		</UTableCell>
	)
}
