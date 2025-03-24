import { useCallback } from 'react'
import { useEditPrinterStore } from '../../editPrinterStore.ts'

export function useGetChangeModalVisibility(currentPrinterId: null | string) {
	return useCallback(function () {
		useEditPrinterStore.setState({ currentPrinterId })
	}, [])
}
