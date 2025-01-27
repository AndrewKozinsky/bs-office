import { create } from 'zustand'
import { AddressSuggestionsRes } from '../../../requests/addressRequests.ts'
import { GetStaffRes } from '../../../requests/staffRequests.ts'
import { SelectOption } from '../../../types/commonTypes.ts'

export type NewOrderStore = {
	// Значение в поисковой строке адреса
	addressSearch: string
	// Варианты адресов подходящие под поисковую строку
	addressSuggestions: AddressSuggestionsRes
	// Варианты адресов в виде данных для показа в выпадающем списке
	addressSuggestionsSelectOptions: null | SelectOption[]

	// Данные по мастерам
	masters: null | GetStaffRes
	// Данные для вывода пунктов выпадающих списков
	mastersSelectOptions: null | SelectOption[]

	isFormValid: boolean
}

export const useNewOrderStore = create<NewOrderStore>()((set) => {
	return {
		addressSearch: 'Оренбург',
		addressSuggestions: [],
		addressSuggestionsSelectOptions: null,

		masters: null,
		mastersSelectOptions: null,

		isFormValid: false,
	}
})
