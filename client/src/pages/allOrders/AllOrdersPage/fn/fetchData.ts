import { useEffect } from 'react'
import { GetOrdersParams, ordersRequests } from '../../../../requests/ordersRequests.ts'
import { useAllOrdersStore } from '../../allPagesStore/allPagesStore.ts'
import { setOrdersDependsOnPage } from './pagination.ts'

export function useFetchOrders() {
	const universalSearch = useAllOrdersStore((s) => s.universalSearchQuery)
	const masterId = useAllOrdersStore((s) => s.masterId)
	const deviceBrandId = useAllOrdersStore((s) => s.deviceBrandId)
	const deviceTypeId = useAllOrdersStore((s) => s.deviceTypeId)
	const orderStatusId = useAllOrdersStore((s) => s.orderStatusId)

	useEffect(() => {
		fetchData({
			fio: universalSearch || undefined,
			master: masterId || undefined,
			brand: deviceBrandId || undefined,
			deviceType: deviceTypeId || undefined,
			orderStatus: orderStatusId || undefined,
		})
	}, [universalSearch, masterId, deviceBrandId, deviceTypeId])
}

async function fetchData(searchParams: GetOrdersParams = {}) {
	// http://192.168.1.10/api/orders/?brand=&deviceType=&master=&orderStatus=&fio=null
	const { pageSize } = useAllOrdersStore.getState()

	try {
		useAllOrdersStore.setState({ loadingOrders: true, pageOrders: null })

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
