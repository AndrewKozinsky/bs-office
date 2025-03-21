import { useCallback } from 'react'
import { useDeleteEmployeeStore } from '../deleteEmployeeStore.ts'

export function useGetChangeModalVisibility(currentEmployeeId: null | string) {
	return useCallback(function () {
		useDeleteEmployeeStore.setState({ currentEmployeeId })
	}, [])
}
