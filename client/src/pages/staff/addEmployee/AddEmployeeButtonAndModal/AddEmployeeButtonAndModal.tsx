import React from 'react'
import { Button, Modal } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import { useAddEmployeeStore } from '../addEmployeeStore.ts'
import AddEmployeeForm from '../AddEmployeeForm/AddEmployeeForm.tsx'
import { useGetChangeModalVisibility } from './fn/modal'

function AddEmployeeButtonAndModal() {
	const isVisible = useAddEmployeeStore((s) => s.isVisible)

	const showModal = useGetChangeModalVisibility(true)
	const closeModal = useGetChangeModalVisibility(false)

	return (
		<>
			<Button onClick={showModal} icon={<PlusCircleOutlined />}>
				Добавить сотрудника
			</Button>
			<Modal title='Редактирование данных сотрудника' open={isVisible} onCancel={closeModal} footer={null}>
				<AddEmployeeForm />
			</Modal>
		</>
	)
}

export default AddEmployeeButtonAndModal
