import { useCallback } from 'react'
import { useEditMessageTemplateStore } from '../../editMessageTemplateStore.ts'

export function useGetChangeModalVisibility(currentMessageTemplateId: null | string) {
	return useCallback(function () {
		useEditMessageTemplateStore.setState({ currentMessageTemplateId })
	}, [])
}
