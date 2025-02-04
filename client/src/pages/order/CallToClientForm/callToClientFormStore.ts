import { create } from 'zustand'
import { GetStaffPhones } from '../../../requests/callsRequests.ts'
import { SelectOption } from '../../../types/commonTypes.ts'
import { MessageTemplate, Order } from '../../../types/user.ts'

export type CallToClientFormStore = {
	loading: boolean
	order: null | Order
	staffPhones: null | GetStaffPhones
	phonesSelectOptions: null | SelectOption[]
	isFormValid: boolean
}

export const useCallToClientFormStore = create<CallToClientFormStore>()((set) => {
	return {
		loading: true,
		order: null,
		staffPhones: null,
		phonesSelectOptions: null,
		isFormValid: false,
	}
})
