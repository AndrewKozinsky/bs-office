import { useCallback } from 'react'
import { useAddSparePartStore } from '../../addSparePartStore.ts'

export function useGetChangeModalVisibility(isVisible: boolean) {
	return useCallback(function () {
		useAddSparePartStore.setState({ isVisible })
	}, [])
}
