import { FormInstance } from 'antd'
import { useSMSNotificationStore } from '../SMSNotificationStore.ts'

export type FieldType = Record<FieldNames, string>

export enum FieldNames {
	messageTemplates = 'messageTemplates',
	message = 'message',
}

export async function checkNotificationForm(form: FormInstance) {
	try {
		await form.validateFields({ validateOnly: true })
		useSMSNotificationStore.setState({ isFormValid: true })
	} catch (errorData) {
		if (errorData.errorFields.length) {
			useSMSNotificationStore.setState({ isFormValid: false })
		}
	}
}
