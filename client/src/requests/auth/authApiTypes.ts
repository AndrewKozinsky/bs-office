import { CurrentUser } from '../../types/user.ts'

namespace AuthApiTypes {
	export type InputData = { login: string; password: string; role: string }

	export type LoginRes = {
		accessToken: string // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFuZHJleUFkbWluIiwiaWQiOjEsInJvbGUiOiLQkNC00LzQuNC90LjRgdGC0YDQsNGC0L7RgCIsImlhdCI6MTczNzM1NjUzOCwiZXhwIjoxNzM3NDg2MTM4fQ.AhJS4bdO096l-UaGqcTOSPi0nGGlK6Ewp5do7om0P2Y"
		refreshToken: string // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFuZHJleUFkbWluIiwiaWQiOjEsInJvbGUiOiLQkNC00LzQuNC90LjRgdGC0YDQsNGC0L7RgCIsImlhdCI6MTczNzM1NjUzOCwiZXhwIjoxNzM5OTQ4NTM4fQ.gmYBwOX4cdQOOp4kemUBfxfTILhPfcNtVaH-8sejGYM"
		role: string
		user: CurrentUser
	}

	export type RegistrationRes = unknown
	export type LogoutRes = unknown
	export type RefreshRes = {
		accessToken: string // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFuZHJleUFkbWluIiwiaWQiOjEsInJvbGUiOiLQkNC00LzQuNC90LjRgdGC0YDQsNGC0L7RgCIsImlhdCI6MTczNzM1NjUzOCwiZXhwIjoxNzM3NDg2MTM4fQ.AhJS4bdO096l-UaGqcTOSPi0nGGlK6Ewp5do7om0P2Y"
		refreshToken: string // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFuZHJleUFkbWluIiwiaWQiOjEsInJvbGUiOiLQkNC00LzQuNC90LjRgdGC0YDQsNGC0L7RgCIsImlhdCI6MTczNzM1NjUzOCwiZXhwIjoxNzM5OTQ4NTM4fQ.gmYBwOX4cdQOOp4kemUBfxfTILhPfcNtVaH-8sejGYM"
		role: string
		user: CurrentUser
	}
}

export default AuthApiTypes
