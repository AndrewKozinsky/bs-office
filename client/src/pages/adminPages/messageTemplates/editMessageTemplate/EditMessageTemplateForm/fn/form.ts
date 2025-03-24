import { FormInstance } from 'antd'
import { FormStatus } from '../../../../../../utils/form.ts'
import { useEditMessageTemplateStore } from '../../editMessageTemplateStore.ts'

export type FieldType = {
	[FormNames.type]: string
	[FormNames.template]: string
}

export enum FormNames {
	type = 'type',
	template = 'template',
}

export function useGetEditMessageTemplateForm(form: FormInstance) {
	return async function () {
		useEditMessageTemplateStore.setState({ formStatus: FormStatus.default })

		form.validateFields({ validateOnly: true })
			.then(() => {
				useEditMessageTemplateStore.setState({ isFormValid: true })
			})
			.catch((errorData) => {
				if (errorData.errorFields.length) {
					useEditMessageTemplateStore.setState({ isFormValid: false })
				}
			})
	}
}
