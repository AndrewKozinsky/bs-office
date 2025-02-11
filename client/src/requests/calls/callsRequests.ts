import $api from '../../components/http'
import CallsApiTypes from './callsApiTypes.ts'

export const callsRequests = {
	// Получение списка телефонов сотрудников
	async getStaffPhones() {
		return $api.get<CallsApiTypes.GetStaffPhones>('/usersasterisk')
	},
	// Звонок клиенту с телефона сотрудника
	async makeCall(body: CallsApiTypes.MakeCallReqBody) {
		return $api.post<CallsApiTypes.GetStaffPhones>('/initiate_call', body)
	},
	// Записи звонков за определённый период
	async getRecords(
		args: CallsApiTypes.GetCallRecordsArgs = { startDate: null, endDate: null, searchNumberValue: '' },
	) {
		return $api.get<CallsApiTypes.GetCallRecords>(
			`/callstoday/${args.startDate}/${args.endDate}/${args.searchNumberValue || 'null'}`,
		)
	},
}
