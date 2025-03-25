import $api from '../http'
import SparePartsApiTypes from './sparePartsApiTypes.ts'

export const sparePartsRequests = {
	async getSpareParts(searchValue: string) {
		let url = '/parts1c'
		if (searchValue) {
			url += '?search=' + searchValue
		}

		return $api.get<SparePartsApiTypes.GetSparePartsRes>(url)
	},
	async deleteSparePart(id: string) {
		return $api.delete<unknown>('/parts1c/' + id)
	},
	async updateSparePart(id: string, inputData: SparePartsApiTypes.UpdateSparePartInput) {
		return $api.put<unknown>('/parts1c/' + id, inputData)
	},
	async addSparePart(inputData: SparePartsApiTypes.AddSparePartInput) {
		return $api.post<unknown>('/parts1c', inputData)
	},
}
