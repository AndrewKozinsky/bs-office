import { useCallback } from 'react'
import { messageTemplateQuery } from '../../../../../../requests/messageTemplate/messageTemplateQuery.ts'
import { messageTemplateRequests } from '../../../../../../requests/messageTemplate/messageTemplateRequests.ts'
import MessageTemplateApiTypes from '../../../../../../requests/messageTemplate/messageTemplateTypes.ts'
import { useEditMessageTemplateStore } from '../../editMessageTemplateStore.ts'
import { FieldType, FormNames } from './form.ts'
import { MessageTemplate, MessageTemplateType } from '../../../../../../types/user.ts'

export function useGetOnEditMessageTemplateFormSubmit(messageTemplate: MessageTemplate) {
	const { refetch: getMessageTemplatesReFetch } = messageTemplateQuery.getMessageTemplates().useQuery()

	return useCallback(async function (values: FieldType) {
		const updateEmployeeInputData: MessageTemplateApiTypes.UpdateMessageTemplateInput = {
			template_id: messageTemplate.template_id,
			template_text: values[FormNames.template],
			template_type: values[FormNames.type] as MessageTemplateType,
		}

		try {
			await messageTemplateRequests.updateMessageTemplate(updateEmployeeInputData)

			// Получить список сотрудников заново
			getMessageTemplatesReFetch()

			// Закрыть модальное окно
			useEditMessageTemplateStore.setState({ currentMessageTemplateId: null })
		} catch (error: unknown) {
			console.log(error)
		}
	}, [])
}
