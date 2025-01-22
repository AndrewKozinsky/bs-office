import { useEffect } from 'react'
import { useAllOrdersStore } from '../../allPagesStore/allPagesStore.ts'

export function useOrdersPagination() {
	const currentPage = useAllOrdersStore((s) => s.currentPage)

	useEffect(() => {
		setOrdersDependsOnPage()
	}, [currentPage])
}

export function setOrdersDependsOnPage() {
	const { currentPage, pageSize, allOrders } = useAllOrdersStore.getState()
	if (!allOrders) return

	const startItemIdxOnThisPage = (currentPage - 1) * pageSize

	const pageOrders = allOrders.slice(startItemIdxOnThisPage, startItemIdxOnThisPage + pageSize)

	useAllOrdersStore.setState({ allOrders, pageOrders })
}

export function setCurrentPage(currentPage: number) {
	useAllOrdersStore.setState({ currentPage })
}
