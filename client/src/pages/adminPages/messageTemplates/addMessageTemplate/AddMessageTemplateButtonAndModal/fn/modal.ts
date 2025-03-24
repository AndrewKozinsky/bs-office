import { useCallback } from 'react'
import { useAddMessageTemplateStore } from '../../addMessageTemplateStore.ts'

export function useGetChangeModalVisibility(isVisible: boolean) {
	return useCallback(function () {
		useAddMessageTemplateStore.setState({ isVisible })
	}, [])
}
