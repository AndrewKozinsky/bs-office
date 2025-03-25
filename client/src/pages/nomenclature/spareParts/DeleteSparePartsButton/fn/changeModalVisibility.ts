import { useCallback } from 'react'
import { useDeleteSparePartsStore } from '../deleteSparePartStore.ts'

export function useGetChangeModalVisibility(currentSparePartId: null | string) {
	return useCallback(function () {
		useDeleteSparePartsStore.setState({ currentSparePartId })
	}, [])
}
