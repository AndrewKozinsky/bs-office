import { create } from 'zustand'
import { GetMessageTemplatesRes } from '../../../requests/messageTemplateRequests.ts'
import { SelectOption } from '../../../types/commonTypes.ts'
import { MessageTemplate, IOrder } from '../../../types/user.ts'

export type SMSNotificationStore = {
	loading: boolean
	order: null | IOrder
	smsTemplates: null | GetMessageTemplatesRes
	smsTemplatesSelectOptions: null | SelectOption[]
	isFormValid: boolean
	// Сколько СМС требуется для отправки введённого сообщения
	smsCountToSendText: number
}

export const useSMSNotificationStore = create<SMSNotificationStore>()((set) => {
	return {
		loading: true,
		order: null,
		smsTemplates: null,
		smsTemplatesSelectOptions: null,
		isFormValid: false,
		smsCountToSendText: 0,
	}
})
