import { useCallback } from 'react'

export function useGetOnOrderClick(orderId: string) {
	return useCallback(function () {
		const orderNumber = parseOrderNumber(orderId)

		if (orderNumber) {
			const searchUrl = `https://order.service-centr.com/SearchOrder?orderNumber=${orderNumber}`
			window.open(searchUrl, '_blank')
		} else {
			console.error('Failed to parse order number from link:', orderId)
		}

		const searchUrl = `https://order.service-centr.com/SearchOrder?orderNumber=${orderNumber}`
		window.open(searchUrl, '_blank')
	}, [])
}

function parseOrderNumber(text: string) {
	const orderNumberRegex = /00НФ-0*(\d+)/
	const match = text.match(orderNumberRegex)

	if (match) {
		return match[1]
	} else {
		return null
	}
}
