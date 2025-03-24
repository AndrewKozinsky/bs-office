import $api from '../http'
import { MessageTemplate } from '../../types/user.ts'
import SmsApiTypes from './smsApiTypes.ts'

export const smsRequests = {
	// Отправка СМС
	async sendCMC(bodyData: SmsApiTypes.SendCMCRequestBody) {
		return $api.post<SmsApiTypes.GetMessageTemplatesRes>('/sms', bodyData)
	},
}
