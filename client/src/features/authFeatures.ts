import AuthApiTypes from '../requests/auth/authApiTypes.ts'
import { authRequests } from '../requests/auth/authRequests.ts'
import { useUserStore } from '../stores/userStore.ts'

export const authFeatures = {
	// Вход пользователя
	async login(inputData: AuthApiTypes.LoginInputData) {
		try {
			const response = await authRequests.login(inputData)
			useUserStore.setState({ user: { ...response.data, id: parseInt(response.data.id) }, isLoading: false })
			return true
		} catch (e) {
			console.log('Login failed with error:')
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
		try {
			const response = await authRequests.me()
			if (!response.data) return

			useUserStore.setState({
				user: { id: parseInt(response.data.id), role: response.data.role, login: response.data.login },
			})
		} catch (e) {
			console.log(e.response?.data?.message)
		} finally {
			useUserStore.setState({ isLoading: false })
		}
	},
}
