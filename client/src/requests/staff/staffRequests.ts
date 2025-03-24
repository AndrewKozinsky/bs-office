import $api from '../http'
import StaffApiTypes from './staffApiTypes.ts'

export const staffRequests = {
	async getStaff() {
		return $api.get<StaffApiTypes.GetStaffRes>('/staff')
	},
	async createEmployee() {
		return $api.post<unknown>('/staff')
	},
	async deleteEmployee(id: string) {
		return $api.delete<unknown>('/staff/' + id)
	},
	async updateEmployee(inputData: StaffApiTypes.UpdateEmployeeInput) {
		return $api.put<unknown>('/staff', inputData)
	},
	async addEmployee(inputData: StaffApiTypes.AddEmployeeInput) {
		return $api.post<unknown>('/staff', inputData)
	},
}
