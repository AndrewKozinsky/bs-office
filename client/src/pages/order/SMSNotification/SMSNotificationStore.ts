import { create } from 'zustand'
import { SelectOption } from '../../../types/commonTypes.ts'
import { MessageTemplate, Order } from '../../../types/user.ts'

export type SMSNotificationStore = {
	loading: boolean
	order: null | Order
	smsTemplates: null | MessageTemplate[]
	smsTemplatesSelectOptions: null | SelectOption[]
}

export const useSMSNotificationStore = create<SMSNotificationStore>()((set) => {
	return {
		loading: true,
		order: null,
		smsTemplates: null,
		smsTemplatesSelectOptions: null,
	}
})
