import { useCallback } from 'react'
import { QueryClient } from '@tanstack/react-query'
import StaffApiTypes from '../../../../../requests/staff/staffApiTypes.ts'
import { staffQuery } from '../../../../../requests/staff/staffQuery.ts'
import { staffRequests } from '../../../../../requests/staff/staffRequests.ts'
import { useEditEmployeeStore } from '../../editEmployeeStore.ts'
import { FieldType, FormNames } from './form'
import { Employee } from '../../../../../types/user.ts'

// Create a query client instance (if you don't already have one)
const queryClient = new QueryClient()

export function useGetOnCreateBoxFormSubmit(employee: Employee) {
	return useCallback(async function (values: FieldType) {
		const updateEmployeeInputData: StaffApiTypes.UpdateEmployeeInput = {
			staff_id: employee.staff_id,
			staff_computer_name: values[FormNames.computerName],
			staff_email: values[FormNames.email],
			staff_external_phone_nomber: values[FormNames.outerPhone],
			staff_id_telegram: values[FormNames.telegram],
			staff_internal_phone_nomber: values[FormNames.innerPhone],
			staff_name: values[FormNames.name],
		}

		try {
			await staffRequests.updateEmployee(updateEmployeeInputData)

			// Закрыть модальное окно
			useEditEmployeeStore.setState({ currentEmployeeId: null })

			// Заново запросить обновлённый список сотрудников
			queryClient.fetchQuery({
				queryKey: ['myData'],
				queryFn: async () => {
					const response = await fetch('/api/data')
					if (!response.ok) throw new Error('Network response was not ok')
					return response.json()
				},
			})
			staffQuery.getStaff().useQuery()
		} catch (error: unknown) {
			console.log(error)
		}
	}, [])
}
