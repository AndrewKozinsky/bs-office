import { CurrentUser, UserRole } from '../../types/user.ts'

namespace AuthApiTypes {
	export type LoginInputData = { message: string; staff_login: string; staff_name: string; success: boolean }

	export type LoginRes = {
		id: string //  "53"
		login: string
		role: UserRole
		message: string // "Авторизация прошла успешно"
		name: string // "Козинский Андрей Сергеевич"
		success: boolean
	}

	export type RegistrationRes = unknown
	export type LogoutRes = unknown
	export type RefreshRes = {
		role: string
		user: CurrentUser
	}
	export type Me = {
		id: string // "53"
		login: string // "Kozinskiy_A_S"
		name: string // "Козинский Андрей Сергеевич"
		role: UserRole // "admin"
	}
}

export default AuthApiTypes
