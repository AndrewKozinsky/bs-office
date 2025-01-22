import $api from '../components/http'
import { Order, OrderStatusName } from '../types/user.ts'

export type GetOrdersParams = {
	// Не правильно названо.
	// На самом деле это универсальное поле для поиска и по марке, и по типу и по имени заказчика.
	// Потом можно переименовать.
	fio?: string
	master?: string
	deviceType?: string
	brand?: string
	orderStatus?: string
}

export type GetOrdersRes = Order[]
export type GetStatusesRes = OrderStatusName[]

export const ordersRequests = {
	async getOrders(params: GetOrdersParams) {
		return $api.get<GetOrdersRes>('/orders', { params })
	},
	async createOrder(data: unknown) {
		return $api.post<GetOrdersRes>('/neworder', { body: data })
	},
	async getStatusesNames() {
		return $api.get<GetStatusesRes>('/status')
	},
}
