import { useEffect } from 'react'
import { GetOrdersParams, ordersRequests } from '../../../../../requests/ordersRequests.ts'
import { useAllOrdersStore } from '../../allPagesStore/allPagesStore.ts'
import { setOrdersDependsOnPage } from './pagination.ts'

export function useFetchOrders() {
	useEffect(() => {
		fetchOrders()
	}, [])
}

async function fetchOrders(
	searchParams: GetOrdersParams = { fio: null, master: null, deviceBrand: null, deviceType: null },
) {
	const { pageSize } = useAllOrdersStore.getState()

	try {
		useAllOrdersStore.setState({ loadingOrders: true })

		const response = await ordersRequests.getOrders(searchParams)
		const allOrders = response.data
		const totalPages = Math.ceil(allOrders.length / pageSize)

		useAllOrdersStore.setState({ allOrders: allOrders, totalPages })

		setOrdersDependsOnPage()
	} catch (error) {
		console.log('Ошибка при загрузке списка заказов')
	} finally {
		useAllOrdersStore.setState({ loadingOrders: false })
	}
}
