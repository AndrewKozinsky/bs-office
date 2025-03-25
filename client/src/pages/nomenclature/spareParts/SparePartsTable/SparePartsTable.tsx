import React from 'react'
import { Typography } from 'antd'
import Loading from '../../../../common/components/Loading/Loading.tsx'
import {
	UTable,
	UTableCell,
	UTableHeadCell,
	UTableHeadRow,
	UTableRow,
} from '../../../../common/components/UTable/UTable.tsx'
import { sparePartsQuery } from '../../../../requests/spareParts/sparePartsQuery.ts'
import { SparePart } from '../../../../types/user.ts'
import DeleteSparePartButton from '../DeleteSparePartsButton/DeleteSparePartButton.tsx'
import EditSparePartButtonAndModal from '../editSparePart/EditSparePartButtonAndModal/EditSparePartButtonAndModal.tsx'
import './SparePartsTable.scss'

const { Text } = Typography

type SparePartsTableProps = {
	searchValue: string
}

function SparePartsTable(props: SparePartsTableProps) {
	const { searchValue } = props

	const getSparePartsRes = sparePartsQuery.getSpareParts(searchValue).useQuery()

	if (getSparePartsRes.isLoading) {
		return <Loading />
	}

	if (getSparePartsRes.error) {
		return <p>Во время запроса произошла ошибка.</p>
	}

	if (!getSparePartsRes.data) {
		return <p>Нет данных для отображения.</p>
	}

	return (
		<UTable block>
			<UTableHeadRow sticky>
				<UTableHeadCell>ID</UTableHeadCell>
				<UTableHeadCell>Название</UTableHeadCell>
				<UTableHeadCell />
			</UTableHeadRow>
			{getSparePartsRes.data.map((sparePart) => {
				return <SparePartsTableRow sparePart={sparePart} key={sparePart.id_parts} />
			})}
		</UTable>
	)
}

export default SparePartsTable

type SparePartsTableRowProps = {
	sparePart: SparePart
}

function SparePartsTableRow(props: SparePartsTableRowProps) {
	const { sparePart } = props

	return (
		<UTableRow>
			<UTableCell>
				<Text className='calls-table__date-wrapper'>{sparePart.id_parts}</Text>
			</UTableCell>
			<UTableCell>
				<Text className='calls-table__date-wrapper'>{sparePart.name_parts}</Text>
			</UTableCell>
			<ControlButtonsRow sparePartData={sparePart} />
		</UTableRow>
	)
}

type ControlButtonsRowProps = {
	sparePartData: SparePart
}

function ControlButtonsRow(props: ControlButtonsRowProps) {
	const { sparePartData } = props

	return (
		<UTableCell className='spare-parts-table__control-buttons-wrapper'>
			<EditSparePartButtonAndModal sparePart={sparePartData} />
			<DeleteSparePartButton sparePart={sparePartData} />
		</UTableCell>
	)
}
