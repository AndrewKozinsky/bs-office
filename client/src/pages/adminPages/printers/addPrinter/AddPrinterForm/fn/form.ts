import { FormInstance } from 'antd'
import { FormStatus } from '../../../../../../utils/form.ts'
import { useAddPrinterStore } from '../../addPrinterStore.ts'

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

export function useGetAddPrinterForm(form: FormInstance) {
	return async function () {
		useAddPrinterStore.setState({ formStatus: FormStatus.default })

		form.validateFields({ validateOnly: true })
			.then(() => {
				useAddPrinterStore.setState({ isFormValid: true })
			})
			.catch((errorData) => {
				if (errorData.errorFields.length) {
					useAddPrinterStore.setState({ isFormValid: false })
				}
			})
	}
}
