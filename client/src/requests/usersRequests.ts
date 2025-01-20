import $api from '../components/http'
import { User, UserDiscoverySource } from '../types/user.ts'

type GetUsers = User[]

type GetUserDiscoverySources = UserDiscoverySource[]

export const usersRequests = {
	async getUsers(fullName: string) {
		return $api.get<GetUsers>(`/users/search/${encodeURIComponent(fullName)}`)
	},
	async getUserDiscoverySources() {
		return $api.get<GetUserDiscoverySources>('/source')
	},
}
