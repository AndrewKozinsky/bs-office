import dayjs from 'dayjs'
import { create } from 'zustand'

export type ICallsPageStore = {
	startDate: null | dayjs.Dayjs
	endDate: null | dayjs.Dayjs
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
