import { create } from 'zustand'
import { Order } from '../../../types/user.ts'

export type OrderStore = {
	loadingOrder: boolean
	order: null | Order
}

export const useOrderStore = create<OrderStore>()((set) => {
	return {
		loadingOrder: true,
		order: null,
	}
})
