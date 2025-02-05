import $api from '../../components/http'
import DeviceApiTypes from './deviceApiTypes.ts'

export const deviceRequests = {
	async getDeviceTypes() {
		return $api.get<DeviceApiTypes.GetDeviceTypesRes>('/device/types')
	},
	async getDeviceBrands() {
		return $api.get<DeviceApiTypes.GetDeviceBrandsRes>('/device/brands')
	},
	/**
	 * Получение названий устройств производителя с переданным идентификатором
	 * @param brand — название производителя, название моделей, которые нужно получить
	 */
	async getBrandDevices(brand: string) {
		return $api.get<DeviceApiTypes.GetBrandDevicesRes>(`/device/model/${encodeURIComponent(brand)}`)
	},
}
