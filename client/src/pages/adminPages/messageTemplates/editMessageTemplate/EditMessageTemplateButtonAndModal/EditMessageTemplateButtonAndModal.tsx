import React from 'react'
import { Button, Modal } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { MessageTemplate } from '../../../../../types/user.ts'
import { useEditMessageTemplateStore } from '../editMessageTemplateStore.ts'
import EditMessageTemplateForm from '../EditMessageTemplateForm/EditMessageTemplateForm.tsx'
import { useGetChangeModalVisibility } from './fn/modal.ts'

type EditMessageTemplateButtonAndModalProps = {
	messageTemplate: MessageTemplate
}

function EditMessageTemplateButtonAndModal(props: EditMessageTemplateButtonAndModalProps) {
	const { messageTemplate } = props

	const currentMessageTemplateId = useEditMessageTemplateStore((s) => s.currentMessageTemplateId)

	const showModal = useGetChangeModalVisibility(messageTemplate.template_id)
	const closeModal = useGetChangeModalVisibility(null)

	return (
		<>
			<Button icon={<EditOutlined />} onClick={showModal} />
			<Modal
				title='Редактирование шаблона сообщения'
				open={currentMessageTemplateId === messageTemplate.template_id}
				onCancel={closeModal}
				footer={null}
			>
				<EditMessageTemplateForm messageTemplateData={messageTemplate} />
			</Modal>
		</>
	)
}

export default EditMessageTemplateButtonAndModal
