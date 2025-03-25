import React from 'react'
import PageContainer from '../../../pageContainer/PageContainer/PageContainer.tsx'
import { useSetPageTitle } from '../../../pageContainer/PageContainerContext/fn/context.ts'
import { pagesRoute } from '../../../pagesRoute.ts'
import AddSparePartButtonAndModal from '../addSpareParts/AddSparePartButtonAndModal/AddSparePartButtonAndModal.tsx'
import SparePartsSearchForm from '../SparePartsSearchForm/SparePartsSearchForm.tsx'
import { useSparePartsStore } from '../sparePartsStore.ts'
import SparePartsTable from '../SparePartsTable/SparePartsTable.tsx'
import './SparePartsPage.scss'

function SparePartPage() {
	const searchValue = useSparePartsStore((s) => s.searchValue)
	useSetPageTitle(pagesRoute.nomenclature.spareParts.name)

	return (
		<PageContainer>
			<SparePartsSearchForm />
			<SparePartsTable searchValue={searchValue} />
			<div className='spare-parts-page__add-spare-parts-button-wrapper'>
				<AddSparePartButtonAndModal />
			</div>
		</PageContainer>
	)
}

export default SparePartPage
