import { create } from 'zustand'
import { Order } from '../../../types/user.ts'

export type CustomerProfileStore = {
	loadingOrder: boolean
	order: null | Order
}

export const useCustomerProfileStore = create<CustomerProfileStore>()((set) => {
	return {
		loadingOrder: true,
		order: null,
	}
})
