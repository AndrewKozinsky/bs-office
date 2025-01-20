import $api from '../components/http'
import { CurrentUser, User } from '../types/user.ts'

type GetStaffRes = User[]

export const staffRequests = {
	async getStaff() {
		return $api.get<GetStaffRes>('/staff')
	},
}
