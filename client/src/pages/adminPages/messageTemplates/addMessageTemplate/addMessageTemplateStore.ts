import { create } from 'zustand'
import { FormStatus } from '../../../../utils/form.ts'

export type AddMessageTemplateStore = {
	isVisible: boolean
	isFormValid: boolean
	formStatus: FormStatus
	formError: null | string
}

export const addMessageTemplateStoreInitial: AddMessageTemplateStore = {
	isVisible: false,
	isFormValid: true,
	formStatus: FormStatus.default,
	formError: null,
}

export const useAddMessageTemplateStore = create<AddMessageTemplateStore>()((set) => {
	return addMessageTemplateStoreInitial
})
