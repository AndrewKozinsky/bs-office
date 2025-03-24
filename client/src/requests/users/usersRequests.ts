import $api from '../http'
import UsersApiTypes from './usersApiTypes.ts'

export const usersRequests = {
	async getUsersByName(name: string) {
		return $api.get<UsersApiTypes.GetUsers>(`/1c/users?name=${encodeURIComponent(name)}`)
	},
	async getUserDiscoverySources() {
		return $api.get<UsersApiTypes.GetUserDiscoverySources>('/source')
	},
}
