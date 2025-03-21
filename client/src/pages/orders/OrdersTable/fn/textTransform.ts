import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { pagesRoute } from '../../../pagesRoute.ts'

export function useGetRedirectToOrderPage(orderId: string) {
	const navigate = useNavigate()

	return useCallback(function () {
		// 00НФ-027316 -> 27316
		const pureOrderId = orderId.slice(6)

		navigate(pagesRoute.order(pureOrderId).path)
	}, [])
}
