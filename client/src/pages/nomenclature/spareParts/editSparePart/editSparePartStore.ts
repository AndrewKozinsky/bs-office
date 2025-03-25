import { create } from 'zustand'
import { FormStatus } from '../../../../utils/form.ts'

export type EditSparePartStore = {
	currentSparePartId: null | string
	isFormValid: boolean
	formStatus: FormStatus
	formError: null | string
}

export const editEmployeeStoreInitial: EditSparePartStore = {
	currentSparePartId: null,
	isFormValid: true,
	formStatus: FormStatus.default,
	formError: null,
}

export const useEditSparePartStore = create<EditSparePartStore>()((set) => {
	return editEmployeeStoreInitial
})
