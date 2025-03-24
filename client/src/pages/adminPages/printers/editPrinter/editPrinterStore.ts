import { create } from 'zustand'
import { FormStatus } from '../../../../utils/form.ts'

export type EditPrinterStore = {
	currentPrinterId: null | string
	isFormValid: boolean
	formStatus: FormStatus
	formError: null | string
}

export const editEmployeeStoreInitial: EditPrinterStore = {
	currentPrinterId: null,
	isFormValid: true,
	formStatus: FormStatus.default,
	formError: null,
}

export const useEditPrinterStore = create<EditPrinterStore>()((set) => {
	return editEmployeeStoreInitial
})
