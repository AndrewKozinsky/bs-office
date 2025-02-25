import { authFeatures } from '../../../features/authFeatures.ts'

export type FieldType = {
	login?: string
	password?: string
}

export async function submitForm(formValues: FieldType) {
	try {
		await authFeatures.login({ staff_login: formValues.login, staff_password: formValues.password })
	} catch (error) {}
}
