import { create } from 'zustand'
import DeviceApiTypes from '../../../requests/device/deviceApiTypes.ts'
import OrdersApiTypes from '../../../requests/orders/ordersApiTypes.ts'
import StaffApiTypes from '../../../requests/staff/staffApiTypes.ts'
import { SelectOption } from '../../../types/commonTypes.ts'
import { IOrder } from '../../../types/user.ts'

export type OrdersStore = {
	loadingOrders: boolean
	errorOrders: boolean
	allOrders: null | IOrder[]

	// Искомый номер заказа
	universalSearchQuery: null | string

	// Данные по мастерам и устройствам
	masters: null | StaffApiTypes.GetStaffRes
	deviceTypes: null | DeviceApiTypes.GetDeviceTypesRes
	deviceBrands: null | DeviceApiTypes.GetDeviceBrandsRes
	orderStatuses: null | OrdersApiTypes.GetStatusesRes

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
		errorOrders: true,
		allOrders: null,

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
