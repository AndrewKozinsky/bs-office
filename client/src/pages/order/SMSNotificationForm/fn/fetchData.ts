import { useEffect } from 'react'
import { messageTemplateRequests } from '../../../../requests/messageTemplateRequests.ts'
import { ordersRequests } from '../../../../requests/ordersRequests.ts'
import { orderManager } from '../../orderManager.ts'
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
		const order = orderManager.isOrderExists(response.data) ? response.data : null

		useSMSNotificationStore.setState({ order })
	} catch (error) {
		console.log('Ошибка при загрузке заказа')
	} finally {
		useSMSNotificationStore.setState({ loading: false })
	}
}

async function fetchMessageTemplates() {
	try {
		const messageTemplatesResp = await messageTemplateRequests.getMessageTemplates()

		const smsTemplates = messageTemplatesResp.data.filter((template) => template.template_type === 'SMS')

		useSMSNotificationStore.setState({ smsTemplates })
	} catch (error) {
		console.log('Ошибка при загрузке списка шаблонов сообщений')
	} finally {
		useSMSNotificationStore.setState({ loading: false })
	}
}
