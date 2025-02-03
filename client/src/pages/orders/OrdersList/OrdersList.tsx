import React from 'react'
import LoadingAnimation from '../../../common/components/LoadingAnimation/LoadingAnimation.tsx'
import PagePagination from '../../../common/components/PagePagination/PagePagination.tsx'
import { setCurrentPage } from '../OrdersPage/fn/pagination.ts'
import { useOrdersStore } from '../ordersStore/ordersStore.ts'
import OrderCard from '../OrderCard/OrderCard.tsx'
import { useIsPaginationVisible } from './fn/isPaginationVisible.ts'
import './OrdersList.scss'

function OrdersList() {
	const loadingOrders = useOrdersStore((s) => s.loadingOrders)

	return (
		<div>
			{loadingOrders ? <LoadingAnimation /> : <OrdersReadyList />}
			<OrdersPagination />
		</div>
	)
}

export default OrdersList

function OrdersReadyList() {
	const ordersOnPage = useOrdersStore((s) => s.pageOrders)

	return (
		<div className='order-cards'>
			{ordersOnPage.map((order, index) => {
				return <OrderCard key={index} order={order} />
			})}
		</div>
	)
}

function OrdersPagination() {
	const allOrders = useOrdersStore((s) => s.allOrders)
	const itemsOnPageNum = useOrdersStore((s) => s.pageSize)

	const isPaginationVisible = useIsPaginationVisible()
	if (!isPaginationVisible) return null

	return <PagePagination total={allOrders.length} pageSize={itemsOnPageNum} onChange={setCurrentPage} />
}
