import { useEffect } from 'react'
import { GetOrdersParams, ordersRequests } from '../../../../requests/ordersRequests.ts'
import { useOrdersStore } from '../../ordersStore/ordersStore.ts'
import { setOrdersDependsOnPage } from './pagination.ts'

export function useFetchOrders() {
	const universalSearch = useOrdersStore((s) => s.universalSearchQuery)
	const masterId = useOrdersStore((s) => s.masterId)
	const deviceBrandId = useOrdersStore((s) => s.deviceBrandId)
	const deviceTypeId = useOrdersStore((s) => s.deviceTypeId)
	const orderStatusId = useOrdersStore((s) => s.orderStatusId)

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
	const { pageSize } = useOrdersStore.getState()

	try {
		useOrdersStore.setState({ loadingOrders: true, pageOrders: null })

		const response = await ordersRequests.getOrders(searchParams)
		const allOrders = response.data
		const totalPages = Math.ceil(allOrders.length / pageSize)

		useOrdersStore.setState({ allOrders: allOrders, totalPages })

		setOrdersDependsOnPage()
	} catch (error) {
		console.log('Ошибка при загрузке списка заказов')
	} finally {
		useOrdersStore.setState({ loadingOrders: false })
	}
}
