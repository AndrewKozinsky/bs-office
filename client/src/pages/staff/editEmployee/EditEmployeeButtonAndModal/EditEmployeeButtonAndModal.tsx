import React from 'react'
import { Button, Modal } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { Employee } from '../../../../types/user.ts'
import { useEditEmployeeStore } from '../editEmployeeStore.ts'
import EditEmployeeForm from '../EditEmployeeForm/EditEmployeeForm.tsx'
import { useGetChangeModalVisibility } from './fn/modal'

type EditEmployeeButtonAndModalProps = {
	employee: Employee
}

function EditEmployeeButtonAndModal(props: EditEmployeeButtonAndModalProps) {
	const { employee } = props

	const currentEmployeeId = useEditEmployeeStore((s) => s.currentEmployeeId)

	const showModal = useGetChangeModalVisibility(employee.staff_id)
	const closeModal = useGetChangeModalVisibility(null)

	return (
		<>
			<Button icon={<EditOutlined />} onClick={showModal} />
			<Modal
				title='Редактирование данных сотрудника'
				open={currentEmployeeId === employee.staff_id}
				onCancel={closeModal}
				footer={null}
			>
				<EditEmployeeForm employee={employee} />
			</Modal>
		</>
	)
}

export default EditEmployeeButtonAndModal
