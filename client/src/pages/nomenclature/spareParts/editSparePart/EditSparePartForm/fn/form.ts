import { FormInstance } from 'antd'
import { FormStatus } from '../../../../../../utils/form.ts'
import { useEditSparePartStore } from '../../editSparePartStore.ts'

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

export function useGetSparePartSparePartForm(form: FormInstance) {
	return async function () {
		useEditSparePartStore.setState({ formStatus: FormStatus.default })

		form.validateFields({ validateOnly: true })
			.then(() => {
				useEditSparePartStore.setState({ isFormValid: true })
			})
			.catch((errorData) => {
				if (errorData.errorFields.length) {
					useEditSparePartStore.setState({ isFormValid: false })
				}
			})
	}
}
