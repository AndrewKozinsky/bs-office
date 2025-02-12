import { EmployeePhone } from '../../types/user.ts'

namespace CallsApiTypes {
	export type GetStaffPhones = EmployeePhone[]

	export type MakeCallReqBody = {
		out_nomber: string // Номер телефона клиента
		in_number: string // Номер телефона сотрудника
	}

	export type GetCallRecordsArgs = {
		startDate: null | string
		endDate: null | string
		searchNumberValue?: string
	}
	export type CallRecord = {
		call_bill_sec: string // '00:00:13'
		call_context: string // ''
		call_status: 'ANSWERED' | 'NO ANSWER' | 'FAILED' | 'BUSY'
		call_type: 'Внутренний' | 'Входящий' | 'Исходящий'
		computer_name: string // ''
		date: string // '2025-02-10'
		date_time: string // '2025-02-10 12:38:01'
		id_call: string // ''
		id_order: string // ''
		id_user: string // ''
		in_number: string // '101'
		name_user: string // ''
		out_nomber: string // ''
		record_file_name: string // 'internal-101-105-20250210-123645-1739173006.19145.wav'
		time: string // '12:38:01'
	}
	export type GetCallRecords = CallRecord[]
}

export default CallsApiTypes
