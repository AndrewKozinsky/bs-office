import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { getOrderNumberFrom1cOrderId } from '../../../../utils/order.ts'
import { pagesRoute } from '../../../pagesRoute.ts'

export function useGetRedirectToOrderPage(orderId: string) {
	const navigate = useNavigate()

	return useCallback(function () {
		// 00НФ-027316 -> 27316
		const pureOrderId = getOrderNumberFrom1cOrderId(orderId)

		navigate(pagesRoute.order(pureOrderId).path)
	}, [])
}
