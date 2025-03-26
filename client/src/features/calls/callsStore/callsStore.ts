import dayjs from 'dayjs'
import { create } from 'zustand'

export type ICallsStore = {
	startDate: null | dayjs.Dayjs
	endDate: null | dayjs.Dayjs
	searchValue: string
	// Имя выбранной записи для прослушивания разговора
	currentRecordFileName: null | string
	// Дата выбранной записи для прослушивания разговора
	currentRecordDate: null | string
}

const callsStoreInitial: ICallsStore = {
	startDate: null,
	endDate: null,
	searchValue: '',
	currentRecordFileName: null,
	currentRecordDate: null,
}

export const useCallsStore = create<ICallsStore>()((set) => {
	return callsStoreInitial
})
