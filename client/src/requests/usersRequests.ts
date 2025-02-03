import $api from '../components/http'
import { User, UserDiscoverySource } from '../types/user.ts'

export type GetUsers = User[]

type GetUserDiscoverySources = UserDiscoverySource[]

export const usersRequests = {
	async getUsersByName(name: string) {
		return $api.get<GetUsers>(`/1c/users?name=${encodeURIComponent(name)}`)
	},
	async getUserDiscoverySources() {
		return $api.get<GetUserDiscoverySources>('/source')
	},
}
