import { useCallback } from 'react'
import { useDeletePrintersStore } from '../deletePrinterStore.ts'

export function useGetChangeModalVisibility(currentPrinterId: null | string) {
	return useCallback(function () {
		useDeletePrintersStore.setState({ currentPrinterId })
	}, [])
}
