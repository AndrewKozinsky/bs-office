import { create } from 'zustand'
// import MessageTemplateApiTypes from '../../../requests/messageTemplate/deviceApiTypes.ts'
import { SelectOption } from '../../../types/commonTypes.ts'
// import { IOrder } from '../../../types/user.ts'

export type SMSNotificationStore = {
	// loading: boolean
	// order: null | IOrder
	// smsTemplates: null | MessageTemplateApiTypes.GetMessageTemplatesRes
	smsTemplatesSelectOptions: null | SelectOption[]
	isFormValid: boolean
	// Сколько СМС требуется для отправки введённого сообщения
	smsCountToSendText: number
}

export const useSMSNotificationStore = create<SMSNotificationStore>()((set) => {
	return {
		// loading: true,
		// order: null,
		// smsTemplates: null,
		smsTemplatesSelectOptions: null,
		isFormValid: false,
		smsCountToSendText: 0,
	}
})
