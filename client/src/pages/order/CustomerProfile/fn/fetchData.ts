import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ordersRequests } from '../../../../requests/orders/ordersRequests.ts'
import { orderManager } from '../../orderManager.ts'
import { useCustomerProfileStore } from '../customerProfileStore.ts'

export function useFetchOrder(orderId: string) {
	useEffect(() => {
		fetchOrderData(orderId)
	}, [orderId])
}

async function fetchOrderData(orderId: string) {
	try {
		useCustomerProfileStore.setState({ loadingOrder: true })

		const response = await ordersRequests.getOrder(orderId)
		const order = orderManager.isOrderExists(response.data) ? response.data : null

		useCustomerProfileStore.setState({ order })
	} catch (error) {
		console.log('Ошибка при загрузке заказа')
	} finally {
		useCustomerProfileStore.setState({ loadingOrder: false })
	}
}
