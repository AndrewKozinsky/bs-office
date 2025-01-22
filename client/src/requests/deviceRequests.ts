import $api from '../components/http'
import { Device, DeviceBrand, DeviceType, User } from '../types/user.ts'

export type GetDeviceTypesRes = DeviceType[]
export type GetDeviceBrandsRes = DeviceBrand[]
type GetDeviceModelRes = Device

export const deviceRequests = {
	async getDeviceTypes() {
		return $api.get<GetDeviceTypesRes>('/device/types')
	},
	async getDeviceBrands() {
		return $api.get<GetDeviceBrandsRes>('/device/brands')
	},
	async getDevice(deviceModel: string) {
		return $api.get<GetDeviceModelRes>(`/device/model/${encodeURIComponent(deviceModel)}`)
	},
}
