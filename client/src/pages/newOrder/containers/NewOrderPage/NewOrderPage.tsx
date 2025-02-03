import React from 'react'
import PageContainer from '../../../PageContainer/PageContainer.tsx'
import { pagesRoute } from '../../../pagesRoute.ts'
import NewOrderContainers from '../NewOrderContainers/NewOrderContainers.tsx'

function NewOrderPage() {
	return (
		<PageContainer header={pagesRoute.newOrder.name}>
			<NewOrderContainers />
		</PageContainer>
	)
}

export default NewOrderPage
