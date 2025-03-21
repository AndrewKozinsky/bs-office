import { Printer } from '../../types/user.ts'

namespace PrintersApiTypes {
	export type GetPrintersRes = Printer[]

	export type UpdatePrinterInput = {
		printer_id: string // "1"
		printer_location: string // "Салмышская"
		printer_name: string // "Argox"
		printer_type: string // "Принтер этикеток"
		printer_url: string // "http://192.168.1.220:631/printers/ARGOX_OS-2140_PPLA_203d
	}

	export type AddPrinterInput = {
		printer_location: string // "Салмышская"
		printer_name: string // "Argox"
		printer_type: string // "Принтер этикеток"
		printer_url: string // "http://192.168.1.220:631/printers/ARGOX_OS-2140_PPLA_203d
	}
}

export default PrintersApiTypes
