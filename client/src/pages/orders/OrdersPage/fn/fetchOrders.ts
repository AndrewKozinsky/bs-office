import { useEffect } from 'react'
import { ordersQuery } from '../../../../requests/orders/ordersQuery.ts'
import { useOrdersStore } from '../../ordersStore/ordersStore.ts'

export function useFetchOrders() {
	const universalSearch = useOrdersStore((s) => s.universalSearchQuery)
	const masterId = useOrdersStore((s) => s.masterId)
	const deviceBrandId = useOrdersStore((s) => s.deviceBrandId)
	const deviceTypeId = useOrdersStore((s) => s.deviceTypeId)
	const orderStatusId = useOrdersStore((s) => s.orderStatusId)

	const { data, isLoading, error } = ordersQuery
		.getOrders({
			fio: universalSearch,
			orderStatus: orderStatusId,
			brand: deviceBrandId,
			master: masterId,
			deviceType: deviceTypeId,
		})
		.useQuery()

	useEffect(
		function () {
			useOrdersStore.setState({ loadingOrders: isLoading })
		},
		[isLoading],
	)

	useEffect(
		function () {
			useOrdersStore.setState({ errorOrders: !!error })
		},
		[error],
	)

	useEffect(
		function () {
			useOrdersStore.setState({ allOrders: data?.data ?? null })
		},
		[data],
	)
}
