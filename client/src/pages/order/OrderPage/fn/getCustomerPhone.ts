import { useEffect, useState } from 'react'
import { ordersRequests } from '../../../../requests/orders/ordersRequests.ts'
import { orderManager } from '../../orderManager.ts'

export function useGetClientPhoneFromOrderData(orderId: string) {
	const [clientPhone, setClientPhone] = useState<null | string>(null)

	useEffect(function () {
		ordersRequests.getOrder(orderId).then((resp) => {
			const order = orderManager.isOrderExists(resp.data) ? resp.data : null
			if (!order) return

			const phone = orderManager.getClientPhone(order)

			setClientPhone(phone)
		})
	}, [])

	return clientPhone
}
