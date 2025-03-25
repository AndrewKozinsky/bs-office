import { create } from 'zustand'

export type DeleteSparePartStore = {
	currentSparePartId: null | string
	loading: boolean
}

export const deleteSparePartsStoreInitial: DeleteSparePartStore = {
	currentSparePartId: null,
	loading: false,
}

export const useDeleteSparePartsStore = create<DeleteSparePartStore>()((set) => {
	return deleteSparePartsStoreInitial
})
