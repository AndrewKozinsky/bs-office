import React from 'react'
import LoadingAnimation from '../../../common/components/LoadingAnimation/LoadingAnimation.tsx'
import { useSetPageTitle } from '../../pageContainer/PageContainerContext/fn/context.ts'
import PageContainer from '../../pageContainer/PageContainer/PageContainer.tsx'
import { pagesRoute } from '../../pagesRoute.ts'
import { useOrdersStore } from '../ordersStore/ordersStore.ts'
import OrdersFilter from '../OrderFilter/OrderFilter.tsx'
import OrdersList from '../OrdersList/OrdersList.tsx'
import { useFetchOrders } from './fn/fetchData.ts'
import { useOrdersPagination } from './fn/pagination.ts'
import './AllOrdersPage.scss'

function AllOrdersPage() {
	useFetchOrders()
	useOrdersPagination()

	const loadingOrders = useOrdersStore((s) => s.loadingOrders)
	useSetPageTitle(pagesRoute.orders.name)

	return (
		<PageContainer>
			<div className='orders-box'>
				<div className='orders-box__left'>
					<OrdersFilter />
				</div>
				<div className='orders-box__right'>{loadingOrders ? <LoadingAnimation /> : <OrdersList />}</div>
			</div>
		</PageContainer>
	)
}

export default AllOrdersPage
