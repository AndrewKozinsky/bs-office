import { FormInstance } from 'antd'
import { useCallToClientFormStore } from '../callToClientFormStore.ts'

export type FieldType = Record<FieldNames, string>

export enum FieldNames {
	phone = 'phone',
}

export async function checkCallToClientForm(form: FormInstance) {
	try {
		await form.validateFields({ validateOnly: true })
		useCallToClientFormStore.setState({ isFormValid: true })
	} catch (errorData) {
		if (errorData.errorFields.length) {
			useCallToClientFormStore.setState({ isFormValid: false })
		}
	}
}
