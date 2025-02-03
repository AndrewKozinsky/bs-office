import $api from '../components/http'
import { MessageTemplate } from '../types/user.ts'

export type GetMessageTemplatesRes = MessageTemplate[]

export const messageTemplateRequests = {
	// Получение всх шаблонов сообщений
	async getMessageTemplates() {
		return $api.get<GetMessageTemplatesRes>('/templates')
	},
}
