import $api from '../../components/http'
import { CurrentUser } from '../../types/user.ts'
import AuthApiTypes from './authApiTypes.ts'

export const authRequests = {
	async login(inputData: AuthApiTypes.LoginInputData) {
		/*try {
			const url = 'http://192.168.6.100/api/login'
			fetch(url, {
				method: 'OPTIONS',
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data)
				})
		} catch (err: any) {
			console.log(err)
		}*/

		try {
			const url = 'http://192.168.6.100/api/login'
			fetch(url, {
				method: 'POST',
				body: JSON.stringify(inputData),
				headers: new Headers({
					'Content-Type': 'application/json',
					Accept: 'application/json',
				}),
			}).then((res) => res.json())
			/*.then((data) => {
					console.log(data)
				})*/
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
