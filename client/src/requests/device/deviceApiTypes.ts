import { Device, DeviceBrand, DeviceModel, DeviceType } from '../../types/user.ts'

namespace DeviceApiTypes {
	export type GetDeviceTypesRes = DeviceType[]
	export type GetDeviceBrandsRes = DeviceBrand[]
	export type GetBrandDevicesRes = Device[]
	export type GetDevicesModelRes = DeviceModel[]
}

export default DeviceApiTypes
