import { useEffect } from 'react'
import { useOrdersStore } from '../../ordersStore/ordersStore.ts'

export function useOrdersPagination() {
	const currentPage = useOrdersStore((s) => s.currentPage)

	useEffect(() => {
		setOrdersDependsOnPage()
	}, [currentPage])
}

export function setOrdersDependsOnPage() {
	const { currentPage, pageSize, allOrders } = useOrdersStore.getState()
	if (!allOrders) return

	const startItemIdxOnThisPage = (currentPage - 1) * pageSize

	const pageOrders = allOrders.slice(startItemIdxOnThisPage, startItemIdxOnThisPage + pageSize)

	useOrdersStore.setState({ allOrders, pageOrders })
}

export function setCurrentPage(currentPage: number) {
	useOrdersStore.setState({ currentPage })
}
