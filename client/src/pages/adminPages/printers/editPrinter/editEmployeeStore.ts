import { create } from 'zustand'
import { FormStatus } from '../../../../utils/form.ts'

export type EditEmployeeStore = {
	currentPrinterId: null | string
	isFormValid: boolean
	formStatus: FormStatus
	formError: null | string
}

export const editEmployeeStoreInitial: EditEmployeeStore = {
	currentPrinterId: null,
	isFormValid: true,
	formStatus: FormStatus.default,
	formError: null,
}

export const useEditPrinterStore = create<EditEmployeeStore>()((set) => {
	return editEmployeeStoreInitial
})
