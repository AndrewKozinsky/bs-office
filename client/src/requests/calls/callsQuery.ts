import { useQuery } from '@tanstack/react-query'
import CallsApiTypes from './callsApiTypes.ts'
import { callsRequests } from './callsRequests.ts'

export const callsQuery = {
	getRecords() {
		return {
			useQuery(params: CallsApiTypes.GetCallRecordsArgs) {
				return useQuery({
					queryKey: ['getRecords', params.startDate, params.endDate, params.searchValue],
					queryFn: async () => {
						const data = await callsRequests.getRecords(params)
						return data.data
					},
				})
			},
		}
	},
	/*getTariffs(groupId: number | string) {
		return {
			key: 'getTariffs-' + groupId,
			useQuery(options: QueryOptions<GroupsApiTypes.GetTariffs> = {}) {
				return useQuery({
					queryKey: [this.key],
					queryFn: () => groupRequests.getTariffs(groupId),
					...options,
				})
			},
		}
	},*/
	/*createOrEditTariffs: {
		useMutation(options: MutationOptions = {}) {
			return useMutation(groupRequests.createOrEditTariffs, options)
		},
	},*/
}
