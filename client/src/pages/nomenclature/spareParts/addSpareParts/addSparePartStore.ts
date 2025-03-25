import { create } from 'zustand'
import { FormStatus } from '../../../../utils/form.ts'

export type AddSparePartStore = {
	isVisible: boolean
	isFormValid: boolean
	formStatus: FormStatus
	formError: null | string
}

export const addSparePartStoreInitial: AddSparePartStore = {
	isVisible: false,
	isFormValid: true,
	formStatus: FormStatus.default,
	formError: null,
}

export const useAddSparePartStore = create<AddSparePartStore>()((set) => {
	return addSparePartStoreInitial
})
