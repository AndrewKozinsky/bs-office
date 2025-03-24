import { useCallback } from 'react'
import { messageTemplateQuery } from '../../../../../../requests/messageTemplate/messageTemplateQuery.ts'
import { messageTemplateRequests } from '../../../../../../requests/messageTemplate/messageTemplateRequests.ts'
import MessageTemplateApiTypes from '../../../../../../requests/messageTemplate/messageTemplateTypes.ts'
import { MessageTemplateType } from '../../../../../../types/user.ts'
import { useAddMessageTemplateStore } from '../../addMessageTemplateStore.ts'
import { FieldType, FormNames } from './form.ts'

export function useGetOnAddMessageTemplateFormSubmit() {
	const { refetch: getMessageTemplatesReFetch } = messageTemplateQuery.getMessageTemplates().useQuery()

	return useCallback(async function (values: FieldType) {
		const updateMessageTemplateInputData: MessageTemplateApiTypes.AddMessageTemplateInput = {
			template_text: values[FormNames.template],
			template_type: values[FormNames.type] as MessageTemplateType,
		}

		try {
			await messageTemplateRequests.addMessageTemplate(updateMessageTemplateInputData)

			// Получить список принтеров заново
			getMessageTemplatesReFetch()

			// Закрыть модальное окно
			useAddMessageTemplateStore.setState({ isVisible: false })
		} catch (error: unknown) {
			console.log(error)
		}
	}, [])
}
