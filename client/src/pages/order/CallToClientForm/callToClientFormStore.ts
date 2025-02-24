import { create } from 'zustand'
import { SelectOption } from '../../../types/commonTypes.ts'
import { IOrder } from '../../../types/user.ts'

export type CallToClientFormStore = {
	phonesSelectOptions: null | SelectOption[]
	isFormValid: boolean
	phoneSearch: string
}

export const useCallToClientFormStore = create<CallToClientFormStore>()((set) => {
	return {
		phonesSelectOptions: null,
		isFormValid: false,
		phoneSearch: '',
	}
})
