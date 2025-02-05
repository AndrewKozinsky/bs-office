import React from 'react'
import { useSetPageTitle } from '../../../pageContainer/PageContainerContext/fn/context.ts'
import PageContainer from '../../../pageContainer/PageContainer/PageContainer.tsx'
import { pagesRoute } from '../../../pagesRoute.ts'
import NewOrderContainers from '../NewOrderContainers/NewOrderContainers.tsx'

function NewOrderPage() {
	// useSetPageTitle(pagesRoute.newOrder.name)

	return (
		<PageContainer>
			<NewOrderContainers />
		</PageContainer>
	)
}

export default NewOrderPage
