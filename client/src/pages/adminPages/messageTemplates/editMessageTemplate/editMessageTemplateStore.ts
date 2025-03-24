import { create } from 'zustand'
import { FormStatus } from '../../../../utils/form.ts'

export type EditMessageTemplateStore = {
	currentMessageTemplateId: null | string
	isFormValid: boolean
	formStatus: FormStatus
	formError: null | string
}

export const editMessageTemplateStoreInitial: EditMessageTemplateStore = {
	currentMessageTemplateId: null,
	isFormValid: true,
	formStatus: FormStatus.default,
	formError: null,
}

export const useEditMessageTemplateStore = create<EditMessageTemplateStore>()((set) => {
	return editMessageTemplateStoreInitial
})
