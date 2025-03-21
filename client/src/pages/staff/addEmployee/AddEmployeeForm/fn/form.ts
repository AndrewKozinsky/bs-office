import { FormInstance } from 'antd'
import { FormStatus } from '../../../../../utils/form.ts'
import { useAddEmployeeStore } from '../../addEmployeeStore.ts'

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

export function useGetAddEmployeeForm(form: FormInstance) {
	return async function () {
		useAddEmployeeStore.setState({ formStatus: FormStatus.default })

		form.validateFields({ validateOnly: true })
			.then(() => {
				useAddEmployeeStore.setState({ isFormValid: true })
			})
			.catch((errorData) => {
				if (errorData.errorFields.length) {
					useAddEmployeeStore.setState({ isFormValid: false })
				}
			})
	}
}
