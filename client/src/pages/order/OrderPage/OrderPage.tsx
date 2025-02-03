// import React from 'react'
import { useParams } from 'react-router-dom'
import { ordersRequests } from '../../../requests/ordersRequests.ts'
import { useUserStore } from '../../../stores/userStore.ts'
import LoadingAnimation from '../../../common/components/LoadingAnimation/LoadingAnimation.tsx'
import PageContainer from '../../PageContainer/PageContainer.tsx'
import { pagesRoute } from '../../pagesRoute.ts'
import NoOrderFound from '../NoOrderFound/NoOrderFound.tsx'
import Order from '../Order/Order.tsx'
import { useOrderStore } from '../orderStore/orderStore.ts'
import { useFetchOrder } from './fn/fetchData.ts'
import './OrderPage.scss'

function OrderPage() {
	const loadingOrder = useOrderStore((s) => s.loadingOrder)
	const order = useOrderStore((s) => s.order)

	useFetchOrder()

	return (
		<PageContainer header={pagesRoute.order('0').name}>
			<div className='order-page'>
				{loadingOrder && <LoadingAnimation />}
				{!loadingOrder && !order && <NoOrderFound />}
				{!loadingOrder && order && <Order />}
			</div>
		</PageContainer>
	)
}

export default OrderPage
