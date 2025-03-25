import { create } from 'zustand'

export type ICallsPageStore = {
	startDate: null | string
	endDate: null | string
	searchValue: string
}

const newCallsPageStoreInitial: ICallsPageStore = {
	startDate: null,
	endDate: null,
	searchValue: '',
}

export const useCallsPageStore = create<ICallsPageStore>()((set) => {
	return newCallsPageStoreInitial
})
