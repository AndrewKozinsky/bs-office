import $api from '../components/http'
import { Device, DeviceBrand, DeviceType, User } from '../types/user.ts'

export type GetDeviceTypesRes = DeviceType[]
export type GetDeviceBrandsRes = DeviceBrand[]
type GetBrandDevicesRes = Device[]
export type GetDevicesModelRes = Device[]

export const deviceRequests = {
	async getDeviceTypes() {
		return $api.get<GetDeviceTypesRes>('/device/types')
	},
	async getDeviceBrands() {
		return $api.get<GetDeviceBrandsRes>('/device/brands')
	},
	/**
	 * Получение названий устройств производителя с переданным идентификатором
	 * @param brand — название производителя, название моделей, которые нужно получить
	 */
	async getBrandDevices(brand: string) {
		return $api.get<GetBrandDevicesRes>(`/device/model/${encodeURIComponent(brand)}`)
	},
}
