import $api from '../components/http'
import { CurrentUser, DeviceBrand, DeviceType, Employee } from '../types/user.ts'

type GetDeviceTypeRes = DeviceType[]
type GetDeviceBrandsRes = DeviceBrand[]

export const deviceRequests = {
	async getDeviceTypes() {
		return $api.get<GetDeviceTypeRes>('/device/types')
	},
	async getDeviceBrands() {
		return $api.get<GetDeviceBrandsRes>('/device/brands')
	},
}
