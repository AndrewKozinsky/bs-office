import { create } from 'zustand'
import { IOrder } from '../../../types/user.ts'

export type CustomerProfileStore = {
	loadingOrder: boolean
	order: null | IOrder
}

export const useCustomerProfileStore = create<CustomerProfileStore>()((set) => {
	return {
		loadingOrder: true,
		order: null,
	}
})
