import { create } from 'zustand'
import { Order } from '../../../../types/user.ts'

interface AllOrdersStore {
	loadingOrders: boolean
	allOrders: null | Order[]
	pageOrders: null | Order[]
	currentPage: number
	totalPages: number
	pageSize: number
}

export const useAllOrdersStore = create<AllOrdersStore>()((set) => {
	return {
		loadingOrders: true,
		allOrders: null,
		pageOrders: null,
		currentPage: 1,
		totalPages: 1,
		pageSize: 10,
	}
})
