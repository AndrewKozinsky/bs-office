import { Spin } from 'antd'
import React, { useState } from 'react'
import PagePagination from '../../../../commonComponents/PagePagination/PagePagination.tsx'
import { useAllOrdersStore } from '../allPagesStore/allPagesStore.ts'
import OrderCard from '../OrderCard/OrderCard.tsx'
import OrderFilter from '../OrderFilter/OrderFilter.tsx'
import { useFetchOrders } from './fn/fetchOrders.ts'
import { setCurrentPage, useOrdersPagination } from './fn/pagination.ts'
import './AllOrdersPage.css'

function AllOrdersPage() {
	useFetchOrders()
	useOrdersPagination()

	const ordersOnPage = useAllOrdersStore((s) => s.pageOrders)
	const allOrders = useAllOrdersStore((s) => s.allOrders)
	const currentPage = useAllOrdersStore((s) => s.currentPage)
	const loadingOrders = useAllOrdersStore((s) => s.loadingOrders)
	const totalPages = useAllOrdersStore((s) => s.totalPages)
	const itemsOnPageNum = useAllOrdersStore((s) => s.pageSize)

	const [expandedOrderId, setExpandedOrderId] = useState(null)

	const toggleDetails = (orderId) => {
		if (expandedOrderId === orderId) {
			setExpandedOrderId(null)
		} else {
			setExpandedOrderId(orderId)
		}
	}

	if (loadingOrders) {
		return <Spin />
	}

	return (
		<div className='container-box'>
			<div className='order-box'>
				<OrderFilter />
				{loadingOrders ? (
					<div className='loading-animation'>
						{' '}
						<img src='/pic/LogoAnims.svg' alt='' />
					</div>
				) : (
					<div className='order-list'>
						<div className='order-cards'>
							{ordersOnPage.map((order, index) => {
								return (
									<OrderCard
										key={index}
										order={order}
										toggleDetails={toggleDetails}
										isOpen={expandedOrderId === order.order_id}
									/>
								)
							})}
						</div>
						<PagePagination total={allOrders.length} pageSize={itemsOnPageNum} onChange={setCurrentPage} />
					</div>
				)}
			</div>
		</div>
	)
}

export default AllOrdersPage
