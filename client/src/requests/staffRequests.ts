import $api from '../components/http'
import { CurrentUser, Employee } from '../types/user.ts'

type GetStaffRes = Employee[]

export const staffRequests = {
	async getStaff() {
		return $api.get<GetStaffRes>('/staff')
	},
}
