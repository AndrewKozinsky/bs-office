import React from 'react'
import PageContainer from '../../../pageContainer/PageContainer/PageContainer.tsx'
import { useSetPageTitle } from '../../../pageContainer/PageContainerContext/fn/context.ts'
import { pagesRoute } from '../../../pagesRoute.ts'
import AddMessageTemplateButtonAndModal from '../addMessageTemplate/AddMessageTemplateButtonAndModal/AddMessageTemplateButtonAndModal.tsx'
import MessageTemplatesTable from '../MessageTemplatesTable/MessageTemplatesTable.tsx'
import './MessageTemplatesPage.scss'

function MessageTemplatesPage() {
	useSetPageTitle(pagesRoute.adminka.messageTemplates.name)

	return (
		<PageContainer>
			<MessageTemplatesTable />
			<div className='message-templates-page__add-employee-button-wrapper'>
				<AddMessageTemplateButtonAndModal />
			</div>
		</PageContainer>
	)
}

export default MessageTemplatesPage
