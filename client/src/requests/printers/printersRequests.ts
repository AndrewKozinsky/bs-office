import $api from '../../components/http'
import PrintersApiTypes from './printersApiTypes.ts'

export const printersRequests = {
	async getPrinters() {
		return $api.get<PrintersApiTypes.GetPrintersRes>('/printers')
	},
	async deletePrinter(id: string) {
		return $api.delete<unknown>('/printers/' + id)
	},
	async updatePrinter(inputData: PrintersApiTypes.UpdatePrinterInput) {
		return $api.put<unknown>('/printers', inputData)
	},
	async addPrinter(inputData: PrintersApiTypes.AddPrinterInput) {
		return $api.post<unknown>('/printers', inputData)
	},
}
