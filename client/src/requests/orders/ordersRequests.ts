import $api from '../../components/http'
import OrdersApiTypes from './ordersApiTypes.ts'

export const ordersRequests = {
	async getOrders(params: OrdersApiTypes.GetOrdersParams) {
		return $api.get<OrdersApiTypes.GetOrdersRes>('/orders', { params })
	},
	async createOrder(body: OrdersApiTypes.CreateOrderBody) {
		return $api.post<OrdersApiTypes.GetOrdersRes>('/neworder', { body })
	},
	async getStatusesNames() {
		return $api.get<OrdersApiTypes.GetStatusesRes>('/status')
	},
	async getOrder(orderId: number | string) {
		return $api.get<OrdersApiTypes.GetOrderRes>('/orders/' + orderId)
	},
}
