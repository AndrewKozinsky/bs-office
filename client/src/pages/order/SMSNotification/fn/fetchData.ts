import { useEffect } from 'react'
import { messageTemplateRequests } from '../../../../requests/messageTemplateRequests.ts'
import { ordersRequests } from '../../../../requests/ordersRequests.ts'
import { Order } from '../../../../types/user.ts'
import { useSMSNotificationStore } from '../SMSNotificationStore.ts'

export function useFetchMessageTemplates(orderId: string) {
	useEffect(() => {
		fetchOrderData(orderId)
	}, [orderId])

	useEffect(() => {
		fetchMessageTemplates()
	}, [])
}

async function fetchOrderData(orderId: string) {
	try {
		useSMSNotificationStore.setState({ loading: true })

		const response = await ordersRequests.getOrder(orderId)
		const order = isOrderExists(response.data) ? response.data : null

		useSMSNotificationStore.setState({ order })
	} catch (error) {
		console.log('Ошибка при загрузке заказа')
	} finally {
		useSMSNotificationStore.setState({ loading: false })
	}
}

function isOrderExists(order: Order) {
	return !!order.device.device_id
}

async function fetchMessageTemplates() {
	try {
		const response = await messageTemplateRequests.getMessageTemplates()

		const smsTemplates = response.data.filter((template) => template.template_type === 'SMS')

		useSMSNotificationStore.setState({ smsTemplates })
	} catch (error) {
		console.log('Ошибка при загрузке списка шаблонов сообщений')
	} finally {
		useSMSNotificationStore.setState({ loading: false })
	}
}
