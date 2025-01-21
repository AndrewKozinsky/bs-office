import $api from '../components/http'
import { pagesRoute } from '../components/pages/pagesRoute.ts'
import { CurrentUser, User, Order } from '../types/user.ts'

export type GetOrdersParams = {
	fio: string | null
	master: string | null
	deviceType: string | null
	deviceBrand: string | null
}

export type GetOrdersRes = Order[]

export const ordersRequests = {
	async getOrders(params: GetOrdersParams) {
		return $api.get<GetOrdersRes>(pagesRoute.orders, { params })
	},
	async createOrder(data: unknown) {
		return $api.post<GetOrdersRes>('/neworder', { body: data })
	},
}
