import { create } from 'zustand'
import { AddressSuggestionsRes } from '../../../../requests/addressRequests.ts'
import { GetDeviceBrandsRes, GetDevicesModelRes, GetDeviceTypesRes } from '../../../../requests/deviceRequests.ts'
import { GetStaffRes } from '../../../../requests/staffRequests.ts'
import { SelectOption } from '../../../../types/commonTypes.ts'

export type NewOrderContainersStore = {
	isUserSelected: boolean
}

export const newOrderContainersStore: NewOrderContainersStore = {
	isUserSelected: false,
}

export const useNewOrderContainersStore = create<NewOrderContainersStore>()((set) => {
	return newOrderContainersStore
})
