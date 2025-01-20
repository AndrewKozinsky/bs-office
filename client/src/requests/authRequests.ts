import $api from '../components/http'
import { CurrentUser } from '../types/user.ts'

type InputData = { login: string; password: string; role: string }

type LoginRes = {
	accessToken: string // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFuZHJleUFkbWluIiwiaWQiOjEsInJvbGUiOiLQkNC00LzQuNC90LjRgdGC0YDQsNGC0L7RgCIsImlhdCI6MTczNzM1NjUzOCwiZXhwIjoxNzM3NDg2MTM4fQ.AhJS4bdO096l-UaGqcTOSPi0nGGlK6Ewp5do7om0P2Y"
	refreshToken: string // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFuZHJleUFkbWluIiwiaWQiOjEsInJvbGUiOiLQkNC00LzQuNC90LjRgdGC0YDQsNGC0L7RgCIsImlhdCI6MTczNzM1NjUzOCwiZXhwIjoxNzM5OTQ4NTM4fQ.gmYBwOX4cdQOOp4kemUBfxfTILhPfcNtVaH-8sejGYM"
	role: string
	user: CurrentUser
}

type RegistrationRes = unknown
type LogoutRes = unknown
type RefreshRes = {
	accessToken: string // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFuZHJleUFkbWluIiwiaWQiOjEsInJvbGUiOiLQkNC00LzQuNC90LjRgdGC0YDQsNGC0L7RgCIsImlhdCI6MTczNzM1NjUzOCwiZXhwIjoxNzM3NDg2MTM4fQ.AhJS4bdO096l-UaGqcTOSPi0nGGlK6Ewp5do7om0P2Y"
	refreshToken: string // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFuZHJleUFkbWluIiwiaWQiOjEsInJvbGUiOiLQkNC00LzQuNC90LjRgdGC0YDQsNGC0L7RgCIsImlhdCI6MTczNzM1NjUzOCwiZXhwIjoxNzM5OTQ4NTM4fQ.gmYBwOX4cdQOOp4kemUBfxfTILhPfcNtVaH-8sejGYM"
	role: string
	user: CurrentUser
}

export const authRequests = {
	async login(inputData: InputData) {
		return $api.post<LoginRes>('/login', inputData)
	},

	async registration(inputData: InputData) {
		return $api.post<RegistrationRes>('/registration', inputData)
	},

	async logout() {
		return $api.post<LogoutRes>('/logout')
	},

	async refresh() {
		return $api.get<RefreshRes>('/refresh', { withCredentials: true })
	},
}
