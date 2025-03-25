import { SparePart } from '../../types/user.ts'

namespace SparePartsApiTypes {
	export type GetSparePartsRes = SparePart[]

	export type UpdateSparePartInput = {
		name_parts: string // "1"
	}

	export type AddSparePartInput = {
		name_parts: string // "Салмышская"
	}
}

export default SparePartsApiTypes
