import $api from '../components/http'
import { CurrentUser, DeviceBrand, DeviceType, User, TypesOfRepair } from '../types/user.ts'

type GetTypesOfRepair = {
	types: TypesOfRepair
}

export const repairRequests = {
	async getTypeOfRepair() {
		return $api.get<GetTypesOfRepair>('/typeofrepaire')
	},
}
