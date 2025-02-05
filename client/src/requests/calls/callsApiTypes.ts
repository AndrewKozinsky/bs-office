import { EmployeePhone } from '../../types/user.ts'

namespace CallsApiTypes {
	export type GetStaffPhones = EmployeePhone[]
	export type MakeCallReqBody = {
		out_nomber: string // Номер телефона клиента
		in_number: string // Номер телефона сотрудника
	}
}

export default CallsApiTypes
