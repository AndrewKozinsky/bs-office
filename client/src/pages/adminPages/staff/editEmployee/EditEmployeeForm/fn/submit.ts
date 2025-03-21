import { useCallback } from 'react'
import { QueryClient } from '@tanstack/react-query'
import StaffApiTypes from '../../../../../../requests/staff/staffApiTypes.ts'
import { staffQuery } from '../../../../../../requests/staff/staffQuery.ts'
import { staffRequests } from '../../../../../../requests/staff/staffRequests.ts'
import { useEditEmployeeStore } from '../../editEmployeeStore.ts'
import { FieldType, FormNames } from './form.ts'
import { Employee } from '../../../../../../types/user.ts'

export function useGetOnEditEmployeeFormSubmit(employee: Employee) {
	const { refetch: getStaffReFetch } = staffQuery.getStaff().useQuery()

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

			// Получить список сотрудников заново
			getStaffReFetch()

			// Закрыть модальное окно
			useEditEmployeeStore.setState({ currentEmployeeId: null })
		} catch (error: unknown) {
			console.log(error)
		}
	}, [])
}
