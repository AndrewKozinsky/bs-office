import $api from '../http'
import { CurrentUser } from '../../types/user.ts'
import AuthApiTypes from './authApiTypes.ts'

export const authRequests = {
	async login(inputData: AuthApiTypes.LoginInputData) {
		try {
			return $api.post<AuthApiTypes.LoginRes>('/login', inputData)
		} catch (err: any) {
			console.log(err)
		}
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

	async me() {
		return $api.get<AuthApiTypes.Me>('/me', { withCredentials: true })
	},
}
