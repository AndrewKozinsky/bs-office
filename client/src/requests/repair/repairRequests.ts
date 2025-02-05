import $api from '../../components/http'
import { CurrentUser, DeviceBrand, DeviceType, User, TypesOfRepair } from '../../types/user.ts'
import RepairApiTypes from './repairApiTypes.ts'

export const repairRequests = {
	async getTypeOfRepair() {
		return $api.get<RepairApiTypes.GetTypesOfRepair>('/typeofrepaire')
	},
}
