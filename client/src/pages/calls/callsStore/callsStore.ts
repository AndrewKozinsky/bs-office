import { create } from 'zustand'

export type ICallsStore = {
	startDate: null | string
	endDate: null | string
	searchValue: string
	// Имя выбранной записи для прослушивания разговора
	currentRecordFileName: null | string
	// Дата выбранной записи для прослушивания разговора
	currentRecordDate: null | string
}

export const newCallsStoreInitial: ICallsStore = {
	startDate: null,
	endDate: null,
	searchValue: '',
	currentRecordFileName: null,
	currentRecordDate: null,
}

export const useCallsStore = create<ICallsStore>()((set) => {
	return newCallsStoreInitial
})
