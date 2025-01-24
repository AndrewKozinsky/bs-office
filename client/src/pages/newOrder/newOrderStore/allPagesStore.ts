import { create } from 'zustand'
import { GetDeviceBrandsRes, GetDeviceTypesRes } from '../../../requests/deviceRequests.ts'
import { GetStatusesRes } from '../../../requests/ordersRequests.ts'
import { GetStaffRes } from '../../../requests/staffRequests.ts'
import { SelectOption } from '../../../types/commonTypes.ts'
import { Order } from '../../../types/user.ts'

export type AllOrdersStore = {
	// Данные по мастерам
	masters: null | GetStaffRes
}

export const useAllOrdersStore = create<AllOrdersStore>()((set) => {
	return {
		masters: null,
	}
})
