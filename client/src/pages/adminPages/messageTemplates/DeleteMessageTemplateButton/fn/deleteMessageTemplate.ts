import { useCallback } from 'react'
import { messageTemplateQuery } from '../../../../../requests/messageTemplate/messageTemplateQuery.ts'
import { messageTemplateRequests } from '../../../../../requests/messageTemplate/messageTemplateRequests.ts'
import { useDeleteMessageTemplateStore } from '../deleteMessageTemplateStore.ts'

export function useGetDeleteTemplateMessage(messageTemplateId: string) {
	const { refetch: getMessageTemplatesReFetch } = messageTemplateQuery.getMessageTemplates().useQuery()

	return useCallback(async function () {
		try {
			await messageTemplateRequests.deleteMessageTemplate(messageTemplateId)

			// Получить список принтеров заново
			getMessageTemplatesReFetch()

			// Закрыть модальное окно
			useDeleteMessageTemplateStore.setState({ currentMessageTemplateId: null })
		} catch (error: unknown) {
			console.log(error)
		}
	}, [])
}
