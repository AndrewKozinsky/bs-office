import { useCallback } from 'react'
import { useAddEmployeeStore } from '../../addEmployeeStore.ts'

export function useGetChangeModalVisibility(isVisible: boolean) {
	return useCallback(function () {
		useAddEmployeeStore.setState({ isVisible })
	}, [])
}
