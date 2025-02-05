import React from 'react'
import {
	UTable,
	UTableCell,
	UTableHeadCell,
	UTableHeadRow,
	UTableRow,
} from '../../../common/components/UTable/UTable.tsx'

function CallsTable() {
	return (
		<UTable block>
			<UTableHeadRow>
				<UTableHeadCell>1</UTableHeadCell>
				<UTableHeadCell>2</UTableHeadCell>
			</UTableHeadRow>
			<UTableRow>
				<UTableCell>22</UTableCell>
				<UTableCell>33</UTableCell>
			</UTableRow>
			<UTableRow>
				<UTableCell>44</UTableCell>
				<UTableCell>55</UTableCell>
			</UTableRow>
		</UTable>
	)
}

export default CallsTable
