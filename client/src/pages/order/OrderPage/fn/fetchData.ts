import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ordersRequests } from '../../../../requests/ordersRequests.ts'
import { Order } from '../../../../types/user.ts'
import { useOrderStore } from '../../orderStore/orderStore.ts'

export function useFetchOrder() {
	let { orderId } = useParams()

	useEffect(() => {
		fetchOrderData(orderId)
	}, [orderId])
}

async function fetchOrderData(orderId: string) {
	try {
		useOrderStore.setState({ loadingOrder: true })

		const response = await ordersRequests.getOrder(orderId)
		const order = isOrderExists(response.data) ? response.data : null

		useOrderStore.setState({ order })
	} catch (error) {
		console.log('Ошибка при загрузке заказа')
	} finally {
		useOrderStore.setState({ loadingOrder: false })
	}
}

export function isOrderExists(order: Order) {
	return !!order.device.device_id
}
