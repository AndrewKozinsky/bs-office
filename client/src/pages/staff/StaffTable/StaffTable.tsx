import React from 'react'
import { Typography } from 'antd'
import LoadingAnimation from '../../../common/components/LoadingAnimation/LoadingAnimation.tsx'
import {
	UTable,
	UTableCell,
	UTableHeadCell,
	UTableHeadRow,
	UTableRow,
} from '../../../common/components/UTable/UTable.tsx'
import { staffQuery } from '../../../requests/staff/staffQuery.ts'
import { Employee } from '../../../types/user.ts'
import './StaffTable.scss'
import DeleteUserButton from '../DeleteUserButton/DeleteUserButton.tsx'
import EditEmployeeButtonAndModal from '../editEmployee/EditEmployeeButtonAndModal/EditEmployeeButtonAndModal.tsx'

const { Text } = Typography

function StaffTable() {
	const getStaffRes = staffQuery.getStaff().useQuery()

	if (getStaffRes.isLoading) {
		return <LoadingAnimation />
	}

	if (getStaffRes.error) {
		return <p>Во время запроса произошла ошибка.</p>
	}

	if (!getStaffRes.data) {
		return <p>Нет данных для отображения.</p>
	}

	return (
		<UTable block>
			<UTableHeadRow sticky>
				<UTableHeadCell>№</UTableHeadCell>
				<UTableHeadCell>Ф.И.О</UTableHeadCell>
				<UTableHeadCell>Логин</UTableHeadCell>
				<UTableHeadCell>Внутренний номер</UTableHeadCell>
				<UTableHeadCell>Внешний номер</UTableHeadCell>
				<UTableHeadCell>Телеграмм</UTableHeadCell>
				<UTableHeadCell>Имя компьютера</UTableHeadCell>
				<UTableHeadCell>Почта</UTableHeadCell>
				<UTableHeadCell />
			</UTableHeadRow>
			{getStaffRes.data.map((employee, i) => {
				return <StaffTableRow counter={i + 1} employeeData={employee} key={employee.staff_id} />
			})}
		</UTable>
	)
}

export default StaffTable

type StaffTableRowProps = {
	counter: number
	employeeData: Employee
}

function StaffTableRow(props: StaffTableRowProps) {
	const { counter, employeeData } = props

	// const preparedData = prepareCellRecordData(employeeData)

	return (
		<UTableRow>
			<UTableCell>
				<Text className='calls-table__date-wrapper'>{counter}</Text>
			</UTableCell>
			<UTableCell>
				<Text className='calls-table__date-wrapper'>{employeeData.staff_name}</Text>
			</UTableCell>
			<UTableCell>
				<Text className='calls-table__date-wrapper'>{employeeData.staff_login}</Text>
			</UTableCell>
			<UTableCell>
				<Text>{employeeData.staff_internal_phone_nomber}</Text>
			</UTableCell>
			<UTableCell>
				<Text className='calls-table__date-wrapper'>{employeeData.staff_external_phone_nomber}</Text>
			</UTableCell>
			<UTableCell>
				<Text className='calls-table__date-wrapper'>{employeeData.staff_id_telegram}</Text>
			</UTableCell>
			<UTableCell>
				<Text className='calls-table__date-wrapper'>{employeeData.staff_computer_name}</Text>
			</UTableCell>
			<UTableCell>
				<Text className='calls-table__date-wrapper'>{employeeData.staff_email}</Text>
			</UTableCell>
			<ControlButtonsRow employeeData={employeeData} />
		</UTableRow>
	)
}

type ControlButtonsRowProps = {
	employeeData: Employee
}

function ControlButtonsRow(props: ControlButtonsRowProps) {
	const { employeeData } = props

	return (
		<UTableCell className='staff-table__control-buttons-wrapper'>
			<EditEmployeeButtonAndModal employee={employeeData} />
			<DeleteUserButton />
		</UTableCell>
	)
}
