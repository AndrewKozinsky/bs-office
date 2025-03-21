import { create } from 'zustand'
import { FormStatus } from '../../../../utils/form.ts'

export type AddEmployeeStore = {
	isVisible: boolean
	isFormValid: boolean
	formStatus: FormStatus
	formError: null | string
}

export const addEmployeeStoreInitial: AddEmployeeStore = {
	isVisible: false,
	isFormValid: true,
	formStatus: FormStatus.default,
	formError: null,
}

export const useAddEmployeeStore = create<AddEmployeeStore>()((set) => {
	return addEmployeeStoreInitial
})
