import { create } from 'zustand'
import { AddressSuggestionsRes } from '../../../../requests/addressRequests.ts'
import { GetDeviceBrandsRes, GetDevicesModelRes, GetDeviceTypesRes } from '../../../../requests/deviceRequests.ts'
import { GetStaffRes } from '../../../../requests/staffRequests.ts'
import { GetUsers } from '../../../../requests/usersRequests.ts'
import { SelectOption } from '../../../../types/commonTypes.ts'

export enum CustomerFormTab {
	FindCustomer = 'findCustomer',
	NewCustomer = 'newCustomer',
}

export type CustomerFormStore = {
	tab: CustomerFormTab
	userNameSearch: string
	users: null | GetUsers
	usersSelectOptions: SelectOption[]
}

export const customerFormStore: CustomerFormStore = {
	tab: CustomerFormTab.FindCustomer,
	userNameSearch: '',
	users: null,
	usersSelectOptions: [],
}

export const useCustomerFormStore = create<CustomerFormStore>()((set) => {
	return customerFormStore
})
