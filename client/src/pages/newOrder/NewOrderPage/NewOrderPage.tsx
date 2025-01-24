import React from 'react'
import PageContainer from '../../PageContainer/PageContainer.tsx'
import { pagesRoute } from '../../pagesRoute.ts'
import NewOrderForm from '../NewOrderForm/NewOrderForm.tsx'
import './NewOrderPage.scss'

function NewOrderPage() {
	return (
		<PageContainer header={pagesRoute.newOrder.name}>
			<NewOrderForm />
		</PageContainer>
	)
}

export default NewOrderPage
