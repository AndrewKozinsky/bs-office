import $api from '../../components/http'
import OrdersApiTypes from './ordersApiTypes.ts'

let getOrdersController: null | AbortController = null

export const ordersRequests = {
	async getOrders(params: OrdersApiTypes.GetOrdersParams) {
		// Cancel the previous request if it exists
		if (getOrdersController) {
			getOrdersController.abort()
		}

		getOrdersController = new AbortController()
		const signal = getOrdersController.signal

		try {
			return await $api.get<OrdersApiTypes.GetOrdersRes>('/orders', { params, signal })
		} catch (error) {
			// @ts-ignore
			if ($api.isCancel(error)) {
				console.log('Request canceled:', error.message)
			} else {
				console.error('Request failed:', error)
			}
		}
	},
	/*async getOrders(params: OrdersApiTypes.GetOrdersParams) {
		return $api.get<OrdersApiTypes.GetOrdersRes>('/orders', { params })
	},*/
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
