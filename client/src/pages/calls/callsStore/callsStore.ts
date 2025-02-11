import { create } from 'zustand'

export type ICallsStore = {
	startDate: null | string
	endDate: null | string
	searchNumberValue: string
}

export const newCallsStoreInitial: ICallsStore = {
	startDate: null,
	endDate: null,
	searchNumberValue: '',
}

export const useCallsStore = create<ICallsStore>()((set) => {
	return newCallsStoreInitial
})
