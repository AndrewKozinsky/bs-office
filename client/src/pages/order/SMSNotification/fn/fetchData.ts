import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { messageTemplateRequests } from '../../../../requests/messageTemplateRequests.ts'
import { ordersRequests } from '../../../../requests/ordersRequests.ts'
import { Order } from '../../../../types/user.ts'
import { useOrderStore } from '../../orderStore/orderStore.ts'

export function useFetchMessageTemplates() {
	let { orderId } = useParams()

	useEffect(() => {
		fetchData(orderId)
	}, [orderId])
}

async function fetchData(orderId: string) {
	try {
		// useOrderStore.setState({ loadingOrder: true })

		const response = await messageTemplateRequests.getMessageTemplates()
		console.log(response.data)
		// const order = isOrderExists(response.data) ? response.data : null

		// useOrderStore.setState({ order })
	} catch (error) {
		console.log('Ошибка при загрузке списка шаблонов сообщений')
	} finally {
		useOrderStore.setState({ loadingOrder: false })
	}
}

function isOrderExists(order: Order) {
	return !!order.device.device_id
}
