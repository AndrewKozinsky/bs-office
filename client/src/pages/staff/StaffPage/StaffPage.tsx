import React from 'react'
import PageContainer from '../../pageContainer/PageContainer/PageContainer.tsx'
import { useSetPageTitle } from '../../pageContainer/PageContainerContext/fn/context.ts'
import { pagesRoute } from '../../pagesRoute.ts'
import StaffTable from '../StaffTable/StaffTable.tsx'
import './StaffPage.scss'

function StaffPage() {
	useSetPageTitle(pagesRoute.adminka.staff.name)

	return (
		<PageContainer>
			<StaffTable />
		</PageContainer>
	)
}

export default StaffPage
