import { create } from 'zustand'
import UsersApiTypes from '../../../../requests/users/usersApiTypes.ts'
import { SelectOption } from '../../../../types/commonTypes.ts'

export enum CustomerFormTab {
	FindCustomer = 'findCustomer',
	NewCustomer = 'newCustomer',
}

export type CustomerFormStore = {
	tab: CustomerFormTab
	userNameSearch: string
	users: null | UsersApiTypes.GetUsers
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
