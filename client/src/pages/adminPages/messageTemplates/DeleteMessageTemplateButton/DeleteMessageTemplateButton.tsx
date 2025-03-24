import React from 'react'
import { Button, Modal, Typography } from 'antd'
import { MessageTemplate } from '../../../../types/user.ts'
import { useDeleteMessageTemplateStore } from './deleteMessageTemplateStore.ts'
import { useGetDeleteTemplateMessage } from './fn/deleteMessageTemplate.ts'
import { useGetChangeModalVisibility } from './fn/changeModalVisibility.ts'
import { DeleteOutlined } from '@ant-design/icons'

const { Text } = Typography

type DeleteMessageTemplateButtonProps = {
	messageTemplate: MessageTemplate
}

function DeleteMessageTemplateButton(props: DeleteMessageTemplateButtonProps) {
	const { messageTemplate } = props

	const currentMessageTemplateId = useDeleteMessageTemplateStore((s) => s.currentMessageTemplateId)
	const loading = useDeleteMessageTemplateStore((s) => s.loading)

	const showModal = useGetChangeModalVisibility(messageTemplate.template_id)
	const hideModal = useGetChangeModalVisibility(null)
	const deleteMessageTemplate = useGetDeleteTemplateMessage(messageTemplate.template_id)

	return (
		<>
			<Button onClick={showModal} color='danger' variant='solid' icon={<DeleteOutlined />} />
			<Modal
				title='Удаление шаблона сообщения'
				open={currentMessageTemplateId === messageTemplate.template_id}
				onOk={deleteMessageTemplate}
				confirmLoading={loading}
				onCancel={hideModal}
				okText='Удалить'
				cancelText='Отмена'
			>
				<Text>Удалить «{messageTemplate.template_text}»?</Text>
			</Modal>
		</>
	)
}

export default DeleteMessageTemplateButton
