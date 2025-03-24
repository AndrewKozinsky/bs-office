import { create } from 'zustand'

export type DeleteMessageTemplateStore = {
	currentMessageTemplateId: null | string
	loading: boolean
}

export const deleteMessageTemplateStoreInitial: DeleteMessageTemplateStore = {
	currentMessageTemplateId: null,
	loading: false,
}

export const useDeleteMessageTemplateStore = create<DeleteMessageTemplateStore>()((set) => {
	return deleteMessageTemplateStoreInitial
})
