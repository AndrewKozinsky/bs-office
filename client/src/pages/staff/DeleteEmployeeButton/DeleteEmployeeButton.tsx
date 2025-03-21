import React from 'react'
import { Button, Modal, Typography } from 'antd'
import { Employee } from '../../../types/user.ts'
import { useDeleteEmployeeStore } from './deleteEmployeeStore.ts'
import { useGetDeleteEmployee } from './fn/deleteParcelBox'
import { useGetChangeModalVisibility } from './fn/changeModalVisibility'
import { DeleteOutlined } from '@ant-design/icons'

const { Text } = Typography

type DeleteEmployeeButtonProps = {
	employee: Employee
}

function DeleteEmployeeButton(props: DeleteEmployeeButtonProps) {
	const { employee } = props

	const currentEmployeeId = useDeleteEmployeeStore((s) => s.currentEmployeeId)
	const loading = useDeleteEmployeeStore((s) => s.loading)

	const showModal = useGetChangeModalVisibility(employee.staff_id)
	const hideModal = useGetChangeModalVisibility(null)
	const deleteParcelBox = useGetDeleteEmployee(employee.staff_id)

	return (
		<>
			<Button onClick={showModal} color='danger' variant='solid' icon={<DeleteOutlined />} />
			<Modal
				title='Удаление сотрудника'
				open={currentEmployeeId === employee.staff_id}
				onOk={deleteParcelBox}
				confirmLoading={loading}
				onCancel={hideModal}
				okText='Удалить'
				cancelText='Отмена'
			>
				<Text>Удалить {employee.staff_name}?</Text>
			</Modal>
		</>
	)
}

export default DeleteEmployeeButton
