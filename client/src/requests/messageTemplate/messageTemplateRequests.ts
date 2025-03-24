import $api from '../http'
import MessageTemplateApiTypes from './messageTemplateTypes.ts'

export const messageTemplateRequests = {
	// Получение всх шаблонов сообщений
	async getMessageTemplates() {
		return $api.get<MessageTemplateApiTypes.GetMessageTemplatesRes>('/templates')
	},
	async addMessageTemplate(inputData: MessageTemplateApiTypes.AddMessageTemplateInput) {
		return $api.post<MessageTemplateApiTypes.AddMessageTemplatesRes>('/templates', inputData)
	},
	async updateMessageTemplate(inputData: MessageTemplateApiTypes.UpdateMessageTemplateInput) {
		return $api.put<MessageTemplateApiTypes.AddMessageTemplatesRes>('/templates', inputData)
	},
	async deleteMessageTemplate(id: string) {
		return $api.delete<MessageTemplateApiTypes.AddMessageTemplatesRes>('/templates/' + id)
	},
}
