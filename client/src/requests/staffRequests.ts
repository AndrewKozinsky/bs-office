import $api from '../components/http'
import { User } from '../types/user.ts'

export type GetStaffRes = User[]

export const staffRequests = {
	async getStaff() {
		return $api.get<GetStaffRes>('/staff')
	},
	async createEmployee() {
		return $api.post<unknown>('/staff')
	},
	async deleteEmployee(id: string) {
		return $api.delete<unknown>('/staff/' + id)
	},
	async updateEmployee() {
		return $api.put<unknown>('/staff/')
	},
}
