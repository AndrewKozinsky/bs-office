import $api from '../../components/http'
import MessageTemplateApiTypes from './deviceApiTypes.ts'

export const messageTemplateRequests = {
	// Получение всх шаблонов сообщений
	async getMessageTemplates() {
		return $api.get<MessageTemplateApiTypes.GetMessageTemplatesRes>('/templates')
	},
}
