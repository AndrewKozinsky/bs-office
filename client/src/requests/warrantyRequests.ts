import $api from '../components/http'

type GetWarrantyRes = any

export const warrantyRequests = {
	async getWarranty(searchValue: string) {
		return $api.get<GetWarrantyRes>(`/WarrantyOrdermaxvi/${encodeURIComponent(searchValue)}`)
	},
	async getExternalLinkAndSendData(data: any) {
		return $api.post<GetWarrantyRes>('/GetExternalLinkAndSendData', { data })
	},
}
