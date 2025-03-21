import React from 'react'
import PageContainer from '../../../pageContainer/PageContainer/PageContainer.tsx'
import { useSetPageTitle } from '../../../pageContainer/PageContainerContext/fn/context.ts'
import { pagesRoute } from '../../../pagesRoute.ts'
import AddEmployeeButtonAndModal from '../addEmployee/AddEmployeeButtonAndModal/AddEmployeeButtonAndModal.tsx'
import StaffTable from '../StaffTable/StaffTable.tsx'
import './StaffPage.scss'

function StaffPage() {
	useSetPageTitle(pagesRoute.adminka.staff.name)

	return (
		<PageContainer>
			<StaffTable />
			<div className='staff-page__add-employee-button-wrapper'>
				<AddEmployeeButtonAndModal />
			</div>
		</PageContainer>
	)
}

export default StaffPage
