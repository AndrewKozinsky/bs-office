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
	async getRecords(args: CallsApiTypes.GetCallRecordsArgs = { startDate: null, endDate: null, searchValue: 'null' }) {
		if (!args.startDate) args.startDate = 'null'
		if (!args.endDate) args.endDate = 'null'
		if (!args.searchValue) args.searchValue = 'null'

		return $api.get<CallsApiTypes.GetCallRecords>(
			`/callstoday/${args.startDate}/${args.endDate}/${args.searchValue || 'null'}`,
		)
	},
	// Получение данных о записи разговора
	async getRecordedDetails(args: { recordDate: string; recordFileName: string }) {
		const { recordDate, recordFileName } = args

		return $api.get<CallsApiTypes.GetCallRecords>(`order/record/${recordDate}/${recordFileName}`)
	},
}
