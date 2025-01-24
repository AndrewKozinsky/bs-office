import { create } from 'zustand'
import { GetStaffRes } from '../../../requests/staffRequests.ts'
import { SelectOption } from '../../../types/commonTypes.ts'

export type NewOrderStore = {
	// Данные по мастерам
	masters: null | GetStaffRes

	// Данные для вывода пунктов выпадающих списков
	mastersSelectOptions: null | SelectOption[]

	isFormValid: boolean
}

export const useNewOrderStore = create<NewOrderStore>()((set) => {
	return {
		masters: null,

		mastersSelectOptions: null,

		isFormValid: false,
	}
})
