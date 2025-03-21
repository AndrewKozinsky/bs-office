import { useCallback } from 'react'
import { useAddPrinterStore } from '../../addPrinterStore.ts'

export function useGetChangeModalVisibility(isVisible: boolean) {
	return useCallback(function () {
		useAddPrinterStore.setState({ isVisible })
	}, [])
}
