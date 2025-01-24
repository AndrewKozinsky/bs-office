import React from 'react'
import LoadingAnimation from '../../../common/components/LoadingAnimation/LoadingAnimation.tsx'
import PageContainer from '../../PageContainer/PageContainer.tsx'
import { pagesRoute } from '../../pagesRoute.ts'
import { useAllOrdersStore } from '../allPagesStore/allPagesStore.ts'
import OrdersFilter from '../OrderFilter/OrderFilter.tsx'
import OrdersList from '../OrdersList/OrdersList.tsx'
import { useFetchOrders } from './fn/fetchData.ts'
import { useOrdersPagination } from './fn/pagination.ts'
import './AllOrdersPage.scss'

function AllOrdersPage() {
	useFetchOrders()
	useOrdersPagination()

	const loadingOrders = useAllOrdersStore((s) => s.loadingOrders)

	return (
		<PageContainer header={pagesRoute.allOrders.name}>
			<div className='order-box'>
				<div className='order-box__left'>
					<OrdersFilter />
				</div>
				<div className='order-box__right'>{loadingOrders ? <LoadingAnimation /> : <OrdersList />}</div>
			</div>
		</PageContainer>
	)
}

export default AllOrdersPage
