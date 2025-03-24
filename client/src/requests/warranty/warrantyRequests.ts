import $api from '../http'
import WarrantyApiTypes from './warrantyApiTypes.ts'

export const warrantyRequests = {
	async getWarranty(searchValue: string) {
		return $api.get<WarrantyApiTypes.GetWarrantyRes>(`/WarrantyOrdermaxvi/${encodeURIComponent(searchValue)}`)
	},
	async getExternalLinkAndSendData(data: any) {
		return $api.post<WarrantyApiTypes.GetWarrantyRes>('/GetExternalLinkAndSendData', { data })
	},
}
