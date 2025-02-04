import $api from '../components/http'
import { MessageTemplate } from '../types/user.ts'

export type GetMessageTemplatesRes = MessageTemplate[]

export type SendCMCRequestBody = {
	phone_number: string
	msg_text: string
}

export const smsRequests = {
	// Отправка СМС
	async sendCMC(data: SendCMCRequestBody) {
		return $api.post<GetMessageTemplatesRes>('/sms', { data })
	},
}
