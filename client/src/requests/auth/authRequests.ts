import $api from '../../components/http'
import { CurrentUser } from '../../types/user.ts'
import AuthApiTypes from './authApiTypes.ts'

export const authRequests = {
	async login(inputData: AuthApiTypes.LoginInputData) {
		try {
			return $api.post<AuthApiTypes.LoginRes>('/login', inputData)
		} catch (err: any) {
			console.log(err)
		}

		// console.log(inputData)

		// return $api.post<AuthApiTypes.LoginRes>('/login', inputData)
	},

	async registration(inputData: AuthApiTypes.LoginInputData) {
		return $api.post<AuthApiTypes.RegistrationRes>('/registration', inputData)
	},

	async logout() {
		return $api.post<AuthApiTypes.LogoutRes>('/logout')
	},

	async refresh() {
		return $api.get<AuthApiTypes.RefreshRes>('/refresh', { withCredentials: true })
	},
}
