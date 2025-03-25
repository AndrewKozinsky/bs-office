import { useCallback } from 'react'
import { useCallsStore } from '../../callsStore/callsStore.ts'

export function useGetOnClientNameClick(clientName: string) {
	return useCallback(function () {
		useCallsStore.setState({ searchValue: clientName })
	}, [])
}
