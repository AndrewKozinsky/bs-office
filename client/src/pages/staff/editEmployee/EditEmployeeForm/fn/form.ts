import { FormInstance } from 'antd'
import { FormStatus } from '../../../../../utils/form.ts'
import { useEditEmployeeStore } from '../../editEmployeeStore.ts'

export type FieldType = {
	[FormNames.name]: string
	[FormNames.innerPhone]: string
	[FormNames.outerPhone]: string
	[FormNames.telegram]: string
	[FormNames.computerName]: string
	[FormNames.email]: string
}

export enum FormNames {
	name = 'name',
	innerPhone = 'innerPhone',
	outerPhone = 'outerPhone',
	telegram = 'telegram',
	computerName = 'computerName',
	email = 'email',
}

export function useGetEditEmployeeForm(form: FormInstance) {
	return async function () {
		useEditEmployeeStore.setState({ formStatus: FormStatus.default })

		form.validateFields({ validateOnly: true })
			.then(() => {
				useEditEmployeeStore.setState({ isFormValid: true })
			})
			.catch((errorData) => {
				if (errorData.errorFields.length) {
					useEditEmployeeStore.setState({ isFormValid: false })
				}
			})
	}
}
