import axios from 'axios'
// Связь с сервером для авторизации и роутинга
// export const API_URL = '/api'
// export const API_URL = 'http://localhost/api'
export const API_URL = 'http://192.168.1.13/api'
// export const API_URL = 'https://bs-backend-test.bts/api'
// export const API_URL = 'https://server-rustam.bts/api'

const $api = axios.create({
	withCredentials: true,
	baseURL: API_URL,
})

$api.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
	return config
})

$api.interceptors.response.use(
	(config) => {
		return config
	},
	async (error) => {
		const originalRequest = error.config
		if (error.response.status == 401 && error.config && !error.config._isRetry) {
			originalRequest._isRetry = true
			try {
				const response = await axios.get(`${API_URL}/refresh`)
				localStorage.setItem('token', response.data.accessToken)
				localStorage.setItem('role', response.data.user.role)
				return $api.request(originalRequest)
			} catch (e) {
				console.log('НЕ АВТОРИЗОВАН')
			}
		}
		throw error
	},
)

export default $api
