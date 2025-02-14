import { useEffect, useState } from 'react'
import { ordersQuery } from '../../../../requests/orders/ordersQuery.ts'
import { orderManager } from '../../orderManager.ts'

export function useGetClientPhoneFromOrderData(orderId: string) {
	const [clientPhone, setClientPhone] = useState<null | string>(null)

	const getOrderRes = ordersQuery.getOrder(orderId).useQuery()

	useEffect(
		function () {
			if (getOrderRes.isLoading || getOrderRes.error) return

			const order = getOrderRes.data.data
			if (!orderManager.isOrderExists(order)) return

			const phone = orderManager.getClientPhone(order)
			setClientPhone(phone)
		},
		[getOrderRes.isLoading, getOrderRes.error],
	)

	return clientPhone
}
