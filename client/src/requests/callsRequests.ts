import $api from '../components/http'
import { EmployeePhone, User, UserDiscoverySource } from '../types/user.ts'

export type GetStaffPhones = EmployeePhone[]
export type MakeCallReqBody = {
	out_nomber: string // Номер телефона клиента
	in_number: string // Номер телефона сотрудника
}

export const callsRequests = {
	// Получение списка телефонов сотрудников
	async getStaffPhones() {
		return $api.get<GetStaffPhones>('/usersasterisk')
	},
	// Звонок клиенту с телефона сотрудника
	async makeCall(body: MakeCallReqBody) {
		return $api.post<GetStaffPhones>('/initiate_call', body)
	},
}
