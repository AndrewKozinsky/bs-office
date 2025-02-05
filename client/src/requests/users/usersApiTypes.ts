import { User, UserDiscoverySource } from '../../types/user.ts'

namespace UsersApiTypes {
	export type GetUsers = User[]

	export type GetUserDiscoverySources = UserDiscoverySource[]
}

export default UsersApiTypes
