// import { useMutation, useQuery } from 'react-query'
// import groupRequests from './groupsRequest'
// import GroupsApiTypes from './groupsApiTypes'
import { MutationOptions, QueryOptions } from '../common'

/*export const groupQuery = {
	getTariffs(groupId: number | string) {
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
	},

	createOrEditTariffs: {
		useMutation(options: MutationOptions = {}) {
			return useMutation(groupRequests.createOrEditTariffs, options)
		},
	},
}*/
