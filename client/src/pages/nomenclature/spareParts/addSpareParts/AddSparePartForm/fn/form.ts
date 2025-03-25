import { FormInstance } from 'antd'
import { FormStatus } from '../../../../../../utils/form.ts'
import { useAddSparePartStore } from '../../addSparePartStore.ts'

export type FieldType = {
	[FormNames.name]: string
}

export enum FormNames {
	name = 'name',
}

export function useGetAddSparePartForm(form: FormInstance) {
	return async function () {
		useAddSparePartStore.setState({ formStatus: FormStatus.default })

		form.validateFields({ validateOnly: true })
			.then(() => {
				useAddSparePartStore.setState({ isFormValid: true })
			})
			.catch((errorData) => {
				if (errorData.errorFields.length) {
					useAddSparePartStore.setState({ isFormValid: false })
				}
			})
	}
}
