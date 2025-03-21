import { useCallback } from 'react'
import { useEditPrinterStore } from '../../editEmployeeStore.ts'

export function useGetChangeModalVisibility(currentPrinterId: null | string) {
	return useCallback(function () {
		useEditPrinterStore.setState({ currentPrinterId })
	}, [])
}
