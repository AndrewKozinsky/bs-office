import { useCallback } from 'react'
import { useEditSparePartStore } from '../../editSparePartStore.ts'

export function useGetChangeModalVisibility(currentSparePartId: null | string) {
	return useCallback(function () {
		useEditSparePartStore.setState({ currentSparePartId })
	}, [])
}
