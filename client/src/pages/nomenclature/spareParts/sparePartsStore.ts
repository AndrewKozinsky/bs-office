import { create } from 'zustand'

export type ISparePartsStore = {
	searchValue: string
}

const sparePartsStoreInitial: ISparePartsStore = {
	searchValue: '',
}

export const useSparePartsStore = create<ISparePartsStore>()((set) => {
	return sparePartsStoreInitial
})
