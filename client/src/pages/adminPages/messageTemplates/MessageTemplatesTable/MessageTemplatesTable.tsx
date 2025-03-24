import React from 'react'
import { Typography } from 'antd'
import Loading from '../../../../common/components/Loading/Loading.tsx'
import {
	UTable,
	UTableCell,
	UTableHeadCell,
	UTableHeadRow,
	UTableRow,
} from '../../../../common/components/UTable/UTable.tsx'
import { messageTemplateQuery } from '../../../../requests/messageTemplate/messageTemplateQuery.ts'
import { MessageTemplate } from '../../../../types/user.ts'
import DeleteMessageTemplateButton from '../DeleteMessageTemplateButton/DeleteMessageTemplateButton.tsx'
import EditMessageTemplateButtonAndModal from '../editMessageTemplate/EditMessageTemplateButtonAndModal/EditMessageTemplateButtonAndModal.tsx'
import './MessageTemplatesTable.scss'

const { Text } = Typography

function MessageTemplatesTable() {
	const getMessageTemplatesRes = messageTemplateQuery.getMessageTemplates().useQuery()

	if (getMessageTemplatesRes.isLoading) {
		return <Loading />
	}

	if (getMessageTemplatesRes.error) {
		return <p>Во время запроса произошла ошибка.</p>
	}

	if (!getMessageTemplatesRes.data) {
		return <p>Нет данных для отображения.</p>
	}

	return (
		<UTable block>
			<UTableHeadRow sticky>
				<UTableHeadCell>ID</UTableHeadCell>
				<UTableHeadCell>Тип</UTableHeadCell>
				<UTableHeadCell>Шаблон</UTableHeadCell>
				<UTableHeadCell />
			</UTableHeadRow>
			{getMessageTemplatesRes.data.data.map((messageTemplate) => {
				return <MessageTemplatesTableRow messageTemplate={messageTemplate} key={messageTemplate.template_id} />
			})}
		</UTable>
	)
}

export default MessageTemplatesTable

type MessageTemplatesTableRowProps = {
	messageTemplate: MessageTemplate
}

function MessageTemplatesTableRow(props: MessageTemplatesTableRowProps) {
	const { messageTemplate } = props

	return (
		<UTableRow>
			<UTableCell>
				<Text className='calls-table__date-wrapper'>{messageTemplate.template_id}</Text>
			</UTableCell>
			<UTableCell>
				<Text className='calls-table__date-wrapper'>{messageTemplate.template_type}</Text>
			</UTableCell>
			<UTableCell>
				<Text className='calls-table__date-wrapper'>{messageTemplate.template_text}</Text>
			</UTableCell>
			<ControlButtonsRow messageTemplateData={messageTemplate} />
		</UTableRow>
	)
}

type ControlButtonsRowProps = {
	messageTemplateData: MessageTemplate
}

function ControlButtonsRow(props: ControlButtonsRowProps) {
	const { messageTemplateData } = props

	return (
		<UTableCell className='message-templates-table__control-buttons-wrapper'>
			<EditMessageTemplateButtonAndModal messageTemplate={messageTemplateData} />
			<DeleteMessageTemplateButton messageTemplate={messageTemplateData} />
		</UTableCell>
	)
}
