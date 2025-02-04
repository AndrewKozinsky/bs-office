import { create } from 'zustand'
import { GetStaffPhones } from '../../../requests/callsRequests.ts'
import { SelectOption } from '../../../types/commonTypes.ts'
import { MessageTemplate, IOrder } from '../../../types/user.ts'

export type CallToClientFormStore = {
	loading: boolean
	order: null | IOrder
	staffPhones: null | GetStaffPhones
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
