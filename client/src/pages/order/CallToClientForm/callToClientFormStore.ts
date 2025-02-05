import { create } from 'zustand'
import CallsApiTypes from '../../../requests/calls/callsApiTypes.ts'
import { SelectOption } from '../../../types/commonTypes.ts'
import { IOrder } from '../../../types/user.ts'

export type CallToClientFormStore = {
	loading: boolean
	order: null | IOrder
	staffPhones: null | CallsApiTypes.GetStaffPhones
	phonesSelectOptions: null | SelectOption[]
	isFormValid: boolean
	phoneSearch: string
}

export const useCallToClientFormStore = create<CallToClientFormStore>()((set) => {
	return {
		loading: true,
		order: null,
		staffPhones: null,
		phonesSelectOptions: null,
		isFormValid: false,
		phoneSearch: '',
	}
})
