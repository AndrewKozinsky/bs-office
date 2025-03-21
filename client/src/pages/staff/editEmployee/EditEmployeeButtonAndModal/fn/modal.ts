import { useCallback } from 'react'
import { useEditEmployeeStore } from '../../editEmployeeStore.ts'

export function useGetChangeModalVisibility(currentEmployeeId: null | string) {
	return useCallback(function () {
		useEditEmployeeStore.setState({ currentEmployeeId })
	}, [])
}
