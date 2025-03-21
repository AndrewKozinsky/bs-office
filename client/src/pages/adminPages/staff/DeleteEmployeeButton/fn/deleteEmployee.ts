import { useCallback } from 'react'
import { staffQuery } from '../../../../../requests/staff/staffQuery.ts'
import { staffRequests } from '../../../../../requests/staff/staffRequests.ts'
import { useDeleteEmployeeStore } from '../deleteEmployeeStore.ts'

export function useGetDeleteEmployee(employeeId: string) {
	const { refetch: getStaffReFetch } = staffQuery.getStaff().useQuery()

	return useCallback(async function () {
		try {
			await staffRequests.deleteEmployee(employeeId)

			// Получить список сотрудников заново
			getStaffReFetch()

			// Закрыть модальное окно
			useDeleteEmployeeStore.setState({ currentEmployeeId: null })
		} catch (error: unknown) {
			console.log(error)
		}
	}, [])
}
