import { create } from 'zustand'

export type DeletePrinterStore = {
	currentPrinterId: null | string
	loading: boolean
}

export const deletePrintersStoreInitial: DeletePrinterStore = {
	currentPrinterId: null,
	loading: false,
}

export const useDeletePrintersStore = create<DeletePrinterStore>()((set) => {
	return deletePrintersStoreInitial
})
