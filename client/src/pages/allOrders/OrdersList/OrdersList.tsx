import React from 'react'
import LoadingAnimation from '../../../commonComponents/LoadingAnimation/LoadingAnimation.tsx'
import PagePagination from '../../../commonComponents/PagePagination/PagePagination.tsx'
import { setCurrentPage } from '../AllOrdersPage/fn/pagination.ts'
import { useAllOrdersStore } from '../allPagesStore/allPagesStore.ts'
import OrderCard from '../OrderCard/OrderCard.tsx'
import { useIsPaginationVisible } from './fn/isPaginationVisible.ts'
import './OrdersList.scss'

function OrdersList() {
	const loadingOrders = useAllOrdersStore((s) => s.loadingOrders)

	return (
		<div>
			{loadingOrders ? <LoadingAnimation /> : <OrdersReadyList />}
			<OrdersPagination />
		</div>
	)
}

export default OrdersList

function OrdersReadyList() {
	const ordersOnPage = useAllOrdersStore((s) => s.pageOrders)

	return (
		<div className='order-cards'>
			{ordersOnPage.map((order, index) => {
				return <OrderCard key={index} order={order} />
			})}
		</div>
	)
}

function OrdersPagination() {
	const allOrders = useAllOrdersStore((s) => s.allOrders)
	const itemsOnPageNum = useAllOrdersStore((s) => s.pageSize)

	const isPaginationVisible = useIsPaginationVisible()
	if (!isPaginationVisible) return null

	return <PagePagination total={allOrders.length} pageSize={itemsOnPageNum} onChange={setCurrentPage} />
}
