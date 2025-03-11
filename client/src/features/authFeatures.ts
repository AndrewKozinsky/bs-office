import AuthApiTypes from '../requests/auth/authApiTypes.ts'
import { authRequests } from '../requests/auth/authRequests.ts'
import { useUserStore } from '../stores/userStore.ts'

export const authFeatures = {
	// метод для входа
	async login(inputData: AuthApiTypes.LoginInputData) {
		try {
			const response = await authRequests.login(inputData)

			// useUserStore.setState({ user: response.data.user })

			/*localStorage.setItem('token', response.data.accessToken)
			localStorage.setItem('role', response.data.role)
			document.cookie = `refreshToken=${response.data.refreshToken}; Max-Age=${30 * 24 * 60 * 60}; Path=/PersonalAccount; Secure; SameSite=None`*/

			return true
		} catch (e) {
			console.log(e.response.data.message)
			return false
		} finally {
			useUserStore.setState({ isLoading: false })
		}
	},
	// метод для входа
	async registration(inputData: AuthApiTypes.LoginInputData) {
		try {
			const response = await authRequests.registration(inputData)
		} catch (e) {
			console.log(e.response?.data?.message)
		}
	},

	async logout() {
		try {
			await authRequests.logout()
			localStorage.removeItem('token')
			useUserStore.setState({ user: null })
		} catch (e) {
			console.log(e.response?.data?.message)
		}
	},

	async checkAuth() {
		if (localStorage.getItem('token')) {
			try {
				const response = await authRequests.refresh()
				localStorage.setItem('token', response.data.accessToken)
				useUserStore.setState({ user: response.data.user })
			} catch (e) {
				console.log(e.response?.data?.message)
			} finally {
				useUserStore.setState({ isLoading: false })
			}
		} else {
			useUserStore.setState({ isLoading: false })
		}
	},
}
