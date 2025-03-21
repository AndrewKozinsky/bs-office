import { create } from 'zustand'
import { FormStatus } from '../../../../utils/form.ts'

export type EditEmployeeStore = {
	currentEmployeeId: null | string
	isFormValid: boolean
	formStatus: FormStatus
	formError: null | string
}

export const editEmployeeStoreInitial: EditEmployeeStore = {
	currentEmployeeId: null,
	isFormValid: true,
	formStatus: FormStatus.default,
	formError: null,
}

export const useEditEmployeeStore = create<EditEmployeeStore>()((set) => {
	return editEmployeeStoreInitial
})
