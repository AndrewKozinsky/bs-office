import React from 'react'
import PageContainer from '../../../pageContainer/PageContainer/PageContainer.tsx'
import { useSetPageTitle } from '../../../pageContainer/PageContainerContext/fn/context.ts'
import { pagesRoute } from '../../../pagesRoute.ts'
import AddPrinterButtonAndModal from '../addPrinter/AddPrinterButtonAndModal/AddPrinterButtonAndModal.tsx'
import PrintersTable from '../PrintersTable/PrintersTable.tsx'
import './PrintersPage.scss'

function PrintersPage() {
	useSetPageTitle(pagesRoute.adminka.printers.name)

	return (
		<PageContainer>
			<PrintersTable />
			<div className='printers-page__add-printer-button-wrapper'>
				<AddPrinterButtonAndModal />
			</div>
		</PageContainer>
	)
}

export default PrintersPage
