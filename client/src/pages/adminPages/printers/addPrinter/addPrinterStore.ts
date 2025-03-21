import { create } from 'zustand'
import { FormStatus } from '../../../../utils/form.ts'

export type AddPrinterStore = {
	isVisible: boolean
	isFormValid: boolean
	formStatus: FormStatus
	formError: null | string
}

export const addEmployeeStoreInitial: AddPrinterStore = {
	isVisible: false,
	isFormValid: true,
	formStatus: FormStatus.default,
	formError: null,
}

export const useAddPrinterStore = create<AddPrinterStore>()((set) => {
	return addEmployeeStoreInitial
})
