import { useEffect, useState } from 'react'
import { ordersRequests } from '../../../../requests/ordersRequests.ts'
import { isOrderExists } from '../../OrderPage/fn/fetchData.ts'

export function useGetClientPhoneFromOrderData(orderId: string) {
	const [clientPhone, setClientPhone] = useState<null | string>(null)

	useEffect(function () {
		ordersRequests.getOrder(orderId).then((resp) => {
			const order = isOrderExists(resp.data) ? resp.data : null
			if (!order) return

			const phone = order.end_user.user_phone || order.retail_user.user_phone

			setClientPhone(phone)
		})
	}, [])

	return clientPhone
}
