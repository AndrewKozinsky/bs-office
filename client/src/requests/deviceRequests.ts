import $api from '../components/http'
import { Device, DeviceBrand, DeviceType, User } from '../types/user.ts'

type GetDeviceTypeRes = DeviceType[]
type GetDeviceBrandsRes = DeviceBrand[]
type GetDeviceModelRes = Device

export const deviceRequests = {
	async getDeviceTypes() {
		return $api.get<GetDeviceTypeRes>('/device/types')
	},
	async getDeviceBrands() {
		return $api.get<GetDeviceBrandsRes>('/device/brands')
	},
	async getDevice(deviceModel: string) {
		return $api.get<GetDeviceModelRes>(`/device/model/${encodeURIComponent(deviceModel)}`)
	},
}
