import $api from '../components/http'
import { CurrentUser, Employee, Order } from '../types/user.ts'

export type GetOrdersParams = {
	fio: string | null
	master: string | null
	deviceType: string | null
	deviceBrand: string | null
}

export type GetOrdersRes = Order[]

export const ordersRequests = {
	async getOrders(params: GetOrdersParams) {
		return $api.get<GetOrdersRes>('/orders', { params })
	},
}
