import { Employee } from '../../types/user.ts'

namespace StaffApiTypes {
	export type GetStaffRes = Employee[]

	export type UpdateEmployeeInput = {
		staff_id: string
		staff_computer_name: string // "DESKTOP-BPT5871"
		staff_email: string //	"sabitvrustam@gmail.com"
		staff_external_phone_nomber: string // "89225372836"
		staff_id_telegram: string // '1496600599'
		staff_internal_phone_nomber: string // '901'
		staff_name: string //  'Сабитов Рустам Ирекович'
	}

	export type AddEmployeeInput = {
		staff_computer_name: string // "DESKTOP-BPT5871"
		staff_email: string //	"sabitvrustam@gmail.com"
		staff_external_phone_nomber: string // "89225372836"
		staff_id_telegram: string // '1496600599'
		staff_internal_phone_nomber: string // '901'
		staff_name: string //  'Сабитов Рустам Ирекович'
	}
}

export default StaffApiTypes
