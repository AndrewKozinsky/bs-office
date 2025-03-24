import { useQuery } from '@tanstack/react-query'
import OrdersApiTypes from './ordersApiTypes.ts'
import { ordersRequests } from './ordersRequests.ts'

export const ordersQuery = {
	getOrders(params: OrdersApiTypes.GetOrdersParams) {
		return {
			key: `getOrders?fio=${params.fio}&master=${params.master}&deviceType=${params.deviceType}&brand=${params.brand}&orderStatus=${params.orderStatus}`,
			useQuery() {
				return useQuery({
					queryKey: [this.key],
					queryFn: async () => {
						return await ordersRequests.getOrders(params)
					},
					staleTime: 60000,
				})
			},
		}
	},
	getOrder(orderId: number | string) {
		return {
			key: 'getOrder_' + orderId,
			useQuery() {
				return useQuery({
					queryKey: [this.key],
					queryFn: async () => {
						return await ordersRequests.getOrder(orderId)
					},
					staleTime: 60000,
				})
			},
		}
	},
}
