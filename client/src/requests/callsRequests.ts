import $api from '../components/http'
import { EmployeePhone, User, UserDiscoverySource } from '../types/user.ts'

export type GetStaffPhones = EmployeePhone[]
export type MakeCallReqBody = {
	to: string // Номер телефона клиента
	from: string // Номер телефона сотрудника
}

export const callsRequests = {
	// Получение списка телефонов сотрудников
	async getStaffPhones() {
		return $api.get<GetStaffPhones>('/usersasterisk')
	},
	// Получение списка телефонов сотрудников
	async makeCall(body: MakeCallReqBody) {
		return $api.post<GetStaffPhones>('/initiate_call', { body })
	},
}
