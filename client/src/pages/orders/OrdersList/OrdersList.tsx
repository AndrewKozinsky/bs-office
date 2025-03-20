import React from 'react'
import { Typography } from 'antd'
import LoadingAnimation from '../../../common/components/LoadingAnimation/LoadingAnimation.tsx'
import PagePagination from '../../../common/components/PagePagination/PagePagination.tsx'
import { setCurrentPage } from '../OrdersPage/fn/pagination.ts'
import { useOrdersStore } from '../ordersStore/ordersStore.ts'
import OrderCard from '../OrderCard/OrderCard.tsx'
import { useIsPaginationVisible } from './fn/isPaginationVisible.ts'
import './OrdersList.scss'

const { Text } = Typography

function OrdersList() {
	const loadingOrders = useOrdersStore((s) => s.loadingOrders)
	const allOrders = useOrdersStore((s) => s.allOrders)

	if (loadingOrders && allOrders) {
		console.log(allOrders)
	}

	return (
		<div>
			{loadingOrders ? (
				<div className='orders-box__loading-wrapper'>
					<LoadingAnimation />
				</div>
			) : (
				<>
					<OrdersReadyList />
					<OrdersPagination />
				</>
			)}
		</div>
	)
}

export default OrdersList

function OrdersReadyList() {
	const ordersOnPage = useOrdersStore((s) => s.pageOrders)
	if (!ordersOnPage) return null

	const content =
		ordersOnPage.length > 0 ? (
			ordersOnPage.map((order, index) => {
				return <OrderCard key={index} order={order} />
			})
		) : (
			<Text>Данных нет.</Text>
		)

	return <div className='order-cards'>{content}</div>
}

function OrdersPagination() {
	const allOrders = useOrdersStore((s) => s.allOrders)
	const itemsOnPageNum = useOrdersStore((s) => s.pageSize)

	const isPaginationVisible = useIsPaginationVisible()
	if (!isPaginationVisible) return null

	return <PagePagination total={allOrders.length} pageSize={itemsOnPageNum} onChange={setCurrentPage} />
}
