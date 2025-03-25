import React from 'react'
import { Button, Modal } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import { useAddSparePartStore } from '../addSparePartStore.ts'
import AddSparePartForm from '../AddSparePartForm/AddSparePartForm.tsx'
import { useGetChangeModalVisibility } from './fn/modal.ts'

function AddSparePartButtonAndModal() {
	const isVisible = useAddSparePartStore((s) => s.isVisible)

	const showModal = useGetChangeModalVisibility(true)
	const closeModal = useGetChangeModalVisibility(false)

	return (
		<>
			<Button onClick={showModal} icon={<PlusCircleOutlined />}>
				Добавить запасную часть
			</Button>
			<Modal title='Добавление запасной части' open={isVisible} onCancel={closeModal} footer={null}>
				<AddSparePartForm />
			</Modal>
		</>
	)
}

export default AddSparePartButtonAndModal
