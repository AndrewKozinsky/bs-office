// import React from 'react'
// import { Button, Modal, Typography } from 'antd'
// import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
// import { useEditEmployeeStore } from '../DeleteUserButton/editEmployeeStore.ts'
// import { useGetChangeModalVisibility } from './fn/changeModalVisibility.ts'

// const { Text } = Typography

/*type EditUserButtonProps = {
	employeeId: number
}*/

/*function EditUserButton(props: EditUserButtonProps) {
	const { employeeId } = props

	const currentEmployeeId = useEditEmployeeStore((s) => s.currentEmployeeId)
	const loading = useEditEmployeeStore((s) => s.loading)

	const showModal = useGetChangeModalVisibility(employeeId)
	const hideModal = useGetChangeModalVisibility(null)
	const changeEmployeeData = useGetDeleteParcelBox(parcelBoxId)

	return (
		<>
			<Button icon={<EditOutlined />} />
			<Modal
				title='Изменение данных сотрудника'
				open={currentEmployeeId === employeeId}
				onOk={changeEmployeeData}
				confirmLoading={loading}
				onCancel={hideModal}
				okText='Удалить'
				cancelText='Отмена'
			>
				<Text>124</Text>
			</Modal>
		</>
	)
}*/

// export default EditUserButton
