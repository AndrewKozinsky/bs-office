import { create } from 'zustand'
import { AddressSuggestionsRes } from '../../../../requests/addressRequests.ts'
import { GetDeviceBrandsRes, GetDevicesModelRes, GetDeviceTypesRes } from '../../../../requests/deviceRequests.ts'
import { GetStaffRes } from '../../../../requests/staffRequests.ts'
import { SelectOption } from '../../../../types/commonTypes.ts'

export type NewOrderStore = {
	// isFormValid: boolean
	// Данные по мастерам
	// masters: null | GetStaffRes
	// Данные для вывода пунктов выпадающих списков
	// mastersSelectOptions: null | SelectOption[]
	// Значение в поисковой строке адреса
	// addressSearch: string
	// Варианты адресов подходящие под поисковую строку
	// addressSuggestions: AddressSuggestionsRes
	// Варианты адресов в виде данных для показа в выпадающем списке
	// addressSuggestionsSelectOptions: null | SelectOption[]
	// Значение в поисковой строке типа устройства
	// deviceTypeSearch: string
	// Варианты типов устройств подходящих под поисковую строку
	// deviceTypes: GetDeviceTypesRes
	// Варианты типов устройств в виде данных для показа в выпадающем списке
	// deviceTypesSelectOptions: null | SelectOption[]
	// Значение в поисковой строке производителя устройства
	// deviceBrandSearch: string
	// Все варианты производителей устройств
	// deviceBrands: GetDeviceBrandsRes
	// Варианты производителя устройства в виде данных для показа в выпадающем списке
	// deviceBrandsSelectOptions: null | SelectOption[]
	// Если выбран производитель, то сюда пишется идентификатор.
	// Если выбран, то можно загрузить его модели в список моделей
	// selectedBrandId: null | string
	// Значение в поисковой строке модели устройства
	// deviceModelSearch: string
	// Все модели устройств
	// deviceModels: GetDevicesModelRes
	// Варианты производителя устройства в виде данных для показа в выпадающем списке
	// deviceModelsSelectOptions: SelectOption[]
}

export const newOrderStoreInitial: NewOrderStore = {
	// isFormValid: false,
	// masters: null,
	// mastersSelectOptions: null,
	// addressSearch: 'Оренбург, ',
	// addressSuggestions: null,
	// addressSuggestionsSelectOptions: null,
	// deviceTypeSearch: '',
	// deviceTypes: null,
	// deviceTypesSelectOptions: null,
	// deviceBrandSearch: '',
	// deviceBrands: null,
	// deviceBrandsSelectOptions: null,
	// selectedBrandId: null,
	// deviceModelSearch: '',
	// deviceModels: null,
	// deviceModelsSelectOptions: [],
}

export const useNewOrderStore = create<NewOrderStore>()((set) => {
	return newOrderStoreInitial
})
