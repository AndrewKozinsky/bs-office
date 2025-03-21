import React from 'react'
import { useSetPageTitle } from '../../pageContainer/PageContainerContext/fn/context.ts'
import PageContainer from '../../pageContainer/PageContainer/PageContainer.tsx'
import { pagesRoute } from '../../pagesRoute.ts'
import OrdersFilter from '../OrderFilter/OrderFilter.tsx'
import OrdersTable from '../OrdersTable/OrdersTable.tsx'
import { useFetchOrders } from './fn/fetchOrders.ts'
import './AllOrdersPage.scss'

function AllOrdersPage() {
	useFetchOrders()
	useSetPageTitle(pagesRoute.orders.name)

	return (
		<PageContainer>
			<div className='orders-box'>
				<div className='orders-box__left'>
					<OrdersFilter />
				</div>
				<div className='orders-box__right'>
					{/*<OrdersList />*/}
					<OrdersTable />
				</div>
			</div>
		</PageContainer>
	)
}

export default AllOrdersPage
