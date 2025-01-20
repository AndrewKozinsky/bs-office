import { authFeatures } from '../../../features/authFeatures.ts'

export type FieldType = {
	login?: string
	password?: string
}

export async function submitForm(formValues: FieldType) {
	try {
		await authFeatures.login({ login: formValues.login, password: formValues.password, role: '' })
	} catch (error) {}
}
