import $api from '../components/http'
import { User } from '../types/user.ts'

export type GetStaffRes = User[]

export const staffRequests = {
	async getStaff() {
		return $api.get<GetStaffRes>('/staff')
	},
}
