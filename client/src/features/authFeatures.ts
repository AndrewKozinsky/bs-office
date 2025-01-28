import { authRequests } from '../requests/authRequests.ts'
import { useUserStore } from '../stores/userStore.ts'

type InputData = { login: string; password: string; role: string }

export const authFeatures = {
	// метод для входа
	async login(inputData: InputData) {
		try {
			const response = await authRequests.login(inputData)

			useUserStore.setState({ user: response.data.user })

			localStorage.setItem('token', response.data.accessToken)
			localStorage.setItem('role', response.data.role)
			document.cookie = `refreshToken=${response.data.refreshToken}; Max-Age=${30 * 24 * 60 * 60}; Path=/PersonalAccount; Secure; SameSite=None`

			return true
		} catch (e) {
			console.log(e.response.data.message)
			return false
		} finally {
			useUserStore.setState({ isLoading: false })
		}
	},
	// метод для входа
	async registration(inputData: InputData) {
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
		if (!localStorage.getItem('token')) return

		try {
			const response = await authRequests.refresh()
			localStorage.setItem('token', response.data.accessToken)
			useUserStore.setState({ user: response.data.user })
		} catch (e) {
			console.log(e.response?.data?.message)
		} finally {
			useUserStore.setState({ isLoading: false })
		}
	},
}
