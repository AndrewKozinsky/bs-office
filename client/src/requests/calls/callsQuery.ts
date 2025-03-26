import { useQuery } from '@tanstack/react-query'
import CallsApiTypes from './callsApiTypes.ts'
import { callsRequests } from './callsRequests.ts'

export const callsQuery = {
	getStaffPhones() {
		return {
			key: 'getStaffPhones',
			useQuery() {
				return useQuery({
					queryKey: [this.key],
					queryFn: async () => {
						const data = await callsRequests.getStaffPhones()
						return data.data
					},
					staleTime: 60000,
				})
			},
		}
	},
	getRecords(params: CallsApiTypes.GetCallRecordsArgs) {
		return {
			key: `getRecords/${params.startDate}/${params.endDate}/${params.searchValue}`,
			useQuery() {
				return useQuery({
					queryKey: [this.key],
					queryFn: async () => {
						const data = await callsRequests.getRecords(params)
						return data.data
					},
					staleTime: 60000,
				})
			},
		}
	},
}
