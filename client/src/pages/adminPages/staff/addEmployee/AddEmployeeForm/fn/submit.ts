import { useCallback } from 'react'
import { QueryClient } from '@tanstack/react-query'
import StaffApiTypes from '../../../../../../requests/staff/staffApiTypes.ts'
import { staffQuery } from '../../../../../../requests/staff/staffQuery.ts'
import { staffRequests } from '../../../../../../requests/staff/staffRequests.ts'
import { useAddEmployeeStore } from '../../addEmployeeStore.ts'
import { FieldType, FormNames } from './form.ts'
import { Employee } from '../../../../../../types/user.ts'

export function useGetOnAddEmployeeFormSubmit() {
	const { refetch: getStaffReFetch } = staffQuery.getStaff().useQuery()

	return useCallback(async function (values: FieldType) {
		const updateEmployeeInputData: StaffApiTypes.AddEmployeeInput = {
			staff_computer_name: values[FormNames.computerName],
			staff_email: values[FormNames.email],
			staff_external_phone_nomber: values[FormNames.outerPhone],
			staff_id_telegram: values[FormNames.telegram],
			staff_internal_phone_nomber: values[FormNames.innerPhone],
			staff_name: values[FormNames.name],
		}

		try {
			await staffRequests.addEmployee(updateEmployeeInputData)

			// Получить список сотрудников заново
			getStaffReFetch()

			// Закрыть модальное окно
			useAddEmployeeStore.setState({ isVisible: false })
		} catch (error: unknown) {
			console.log(error)
		}
	}, [])
}
