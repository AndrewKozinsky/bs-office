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
	async getRecordedDetailsBlob(args: {
		recordYear: string
		recordMonth: string
		recordDay: string
		recordName: string
	}) {
		const { recordYear, recordMonth, recordDay, recordName } = args

		const url = `record/${recordYear}/${recordMonth}/${recordDay}/${recordName}`
		const response = await fetch(url)
		if (!response.ok) {
			throw new Error('Network response was not ok')
		}

		// Получение бинарных данных
		const audioData = await response.arrayBuffer()

		// Создание объекта Blob из бинарных данных
		return new Blob([audioData], { type: 'audio/wav' })
	},
}
