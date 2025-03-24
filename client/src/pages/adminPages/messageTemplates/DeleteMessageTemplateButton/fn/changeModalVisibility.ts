import { useCallback } from 'react'
import { useDeleteMessageTemplateStore } from '../deleteMessageTemplateStore.ts'

export function useGetChangeModalVisibility(currentMessageTemplateId: null | string) {
	return useCallback(function () {
		useDeleteMessageTemplateStore.setState({ currentMessageTemplateId })
	}, [])
}
