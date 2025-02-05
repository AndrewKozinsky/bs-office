import { create } from 'zustand'

export type ICallsStore = {
	fromDate?: null | string
	toDate?: string
}

export const newCallsStoreInitial: ICallsStore = {
	fromDate: null,
	toDate: null,
}

export const useCallsStore = create<ICallsStore>()((set) => {
	return newCallsStoreInitial
})
