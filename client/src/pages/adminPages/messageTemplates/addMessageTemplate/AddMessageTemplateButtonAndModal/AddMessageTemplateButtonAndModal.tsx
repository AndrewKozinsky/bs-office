import React from 'react'
import { Button, Modal } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import { useAddMessageTemplateStore } from '../addMessageTemplateStore.ts'
import AddMessageTemplateForm from '../AddMessageTemplateForm/AddMessageTemplateForm.tsx'
import { useGetChangeModalVisibility } from './fn/modal.ts'

function AddMessageTemplateButtonAndModal() {
	const isVisible = useAddMessageTemplateStore((s) => s.isVisible)

	const showModal = useGetChangeModalVisibility(true)
	const closeModal = useGetChangeModalVisibility(false)

	return (
		<>
			<Button onClick={showModal} icon={<PlusCircleOutlined />}>
				Добавить шаблон сообщения
			</Button>
			<Modal title='Редактирование шаблона сообщения' open={isVisible} onCancel={closeModal} footer={null}>
				<AddMessageTemplateForm />
			</Modal>
		</>
	)
}

export default AddMessageTemplateButtonAndModal
