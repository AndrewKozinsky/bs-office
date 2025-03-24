import { FormInstance } from 'antd'
import { FormStatus } from '../../../../../../utils/form.ts'
import { useAddMessageTemplateStore } from '../../addMessageTemplateStore.ts'

export type FieldType = {
	[FormNames.type]: string
	[FormNames.template]: string
}

export enum FormNames {
	type = 'type',
	template = 'template',
}

export function useGetAddMessageTemplateForm(form: FormInstance) {
	return async function () {
		useAddMessageTemplateStore.setState({ formStatus: FormStatus.default })

		form.validateFields({ validateOnly: true })
			.then(() => {
				useAddMessageTemplateStore.setState({ isFormValid: true })
			})
			.catch((errorData) => {
				if (errorData.errorFields.length) {
					useAddMessageTemplateStore.setState({ isFormValid: false })
				}
			})
	}
}
