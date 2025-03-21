import React from 'react'
import { Button, Modal } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import { useAddPrinterStore } from '../addPrinterStore.ts'
import AddPrinterForm from '../AddPrinterForm/AddPrinterForm.tsx'
import { useGetChangeModalVisibility } from './fn/modal.ts'

function AddPrinterButtonAndModal() {
	const isVisible = useAddPrinterStore((s) => s.isVisible)

	const showModal = useGetChangeModalVisibility(true)
	const closeModal = useGetChangeModalVisibility(false)

	return (
		<>
			<Button onClick={showModal} icon={<PlusCircleOutlined />}>
				Добавить принтер
			</Button>
			<Modal title='Редактирование принтера' open={isVisible} onCancel={closeModal} footer={null}>
				<AddPrinterForm />
			</Modal>
		</>
	)
}

export default AddPrinterButtonAndModal
