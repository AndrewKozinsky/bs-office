// import groupRequests from './groupsRequest'
// import GroupsApiTypes from './groupsApiTypes'
// import { MutationOptions, QueryOptions } from '../common'

import { QueryOptions, useQuery } from '@tanstack/react-query'
import $api from '../../components/http'
import OrdersApiTypes from './ordersApiTypes.ts'
import { ordersRequests } from './ordersRequests.ts'

export const ordersQuery = {
	async getOrders(params: OrdersApiTypes.GetOrdersParams) {
		return {
			key: 'getOrders',
			useQuery() {
				return useQuery({
					queryKey: [this.key],
					queryFn: async () => {
						return await ordersRequests.getOrders(params)
					},
				})
			},
		}

		/*return {
			key: 'getOrders',
			useQuery(options: QueryOptions<OrdersApiTypes.GetOrdersRes> = {}) {
				return useQuery({
					queryKey: [this.key],

					queryFn: () => ordersRequests.getOrders(params),
					...options,
				})
			},
		}*/

		// return $api.get<OrdersApiTypes.GetOrdersRes>('/orders', { params })
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
