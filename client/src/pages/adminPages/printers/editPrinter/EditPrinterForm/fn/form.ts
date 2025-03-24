import { FormInstance } from 'antd'
import { FormStatus } from '../../../../../../utils/form.ts'
import { useEditPrinterStore } from '../../editPrinterStore.ts'

export type FieldType = {
	[FormNames.location]: string
	[FormNames.name]: string
	[FormNames.type]: string
	[FormNames.url]: string
}

export enum FormNames {
	location = 'location',
	name = 'name',
	type = 'type',
	url = 'url',
}

export function useGetEditPrinterForm(form: FormInstance) {
	return async function () {
		useEditPrinterStore.setState({ formStatus: FormStatus.default })

		form.validateFields({ validateOnly: true })
			.then(() => {
				useEditPrinterStore.setState({ isFormValid: true })
			})
			.catch((errorData) => {
				if (errorData.errorFields.length) {
					useEditPrinterStore.setState({ isFormValid: false })
				}
			})
	}
}
