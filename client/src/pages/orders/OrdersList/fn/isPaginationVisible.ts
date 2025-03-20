import { useMemo } from 'react'
import { useOrdersStore } from '../../ordersStore/ordersStore.ts'

export function useIsPaginationVisible() {
	const allOrders = useOrdersStore((s) => s.allOrders)
	const pageSize = useOrdersStore((s) => s.pageSize)
	const loadingOrders = useOrdersStore((s) => s.loadingOrders)

	return useMemo(
		function () {
			if (loadingOrders) return false

			return allOrders.length > pageSize
		},
		[allOrders, pageSize, loadingOrders],
	)
}
