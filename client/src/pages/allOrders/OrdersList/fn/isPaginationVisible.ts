import { useMemo } from 'react'
import { useAllOrdersStore } from '../../allPagesStore/allPagesStore.ts'

export function useIsPaginationVisible() {
	const allOrders = useAllOrdersStore((s) => s.allOrders)
	const pageSize = useAllOrdersStore((s) => s.pageSize)
	const loadingOrders = useAllOrdersStore((s) => s.loadingOrders)

	return useMemo(
		function () {
			if (loadingOrders) return false

			return allOrders.length > pageSize
		},
		[allOrders, pageSize],
	)
}
