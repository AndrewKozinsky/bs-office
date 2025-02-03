import { create } from 'zustand'
import { GetDeviceBrandsRes, GetDeviceTypesRes } from '../../../requests/deviceRequests.ts'
import { GetStatusesRes } from '../../../requests/ordersRequests.ts'
import { GetStaffRes } from '../../../requests/staffRequests.ts'
import { SelectOption } from '../../../types/commonTypes.ts'
import { Order } from '../../../types/user.ts'

export type OrdersStore = {
	loadingOrders: boolean
	allOrders: null | Order[]
	pageOrders: null | Order[]
	currentPage: number
	totalPages: number
	pageSize: number

	// Искомый номер заказа
	universalSearchQuery: null | string

	// Данные по мастерам и устройствам
	masters: null | GetStaffRes
	deviceTypes: null | GetDeviceTypesRes
	deviceBrands: null | GetDeviceBrandsRes
	orderStatuses: null | GetStatusesRes

	// Данные для вывода пунктов выпадающих списков
	mastersSelectOptions: null | SelectOption[]
	deviceTypesSelectOptions: null | SelectOption[]
	deviceBrandsSelectOptions: null | SelectOption[]
	orderStatusesSelectOptions: null | SelectOption[]

	// Выбранный мастер, тип устройства и бренда для поиска
	masterId: null | string
	deviceTypeId: null | string
	deviceBrandId: null | string
	orderStatusId: null | string
}

export const useOrdersStore = create<OrdersStore>()((set) => {
	return {
		loadingOrders: true,
		allOrders: null,
		pageOrders: null,
		currentPage: 1,
		totalPages: 1,
		pageSize: 10,

		universalSearchQuery: null,

		masters: null,
		deviceTypes: null,
		deviceBrands: null,
		orderStatuses: null,

		mastersSelectOptions: null,
		deviceTypesSelectOptions: null,
		deviceBrandsSelectOptions: null,
		orderStatusesSelectOptions: null,

		masterId: null,
		deviceTypeId: null,
		deviceBrandId: null,
		orderStatusId: null,
	}
})
