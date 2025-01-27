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

export type CreateOrderBody = {
	retail_user: {
		user_id?: string
		user_name?: string
		user_phone?: string
		user_address?: string
		user_legal_address?: string
		user_type?: string
		user_source?: string
		user_role?: string
	}

	master: {
		user_id: string
	}
	device: {
		device_model_id: string
		device_sale_date: string
		device_type_id: string
		device_type: string
		device_brand_id: string
		device_full_model: string
		device_brand: string
		device_model: string
		device_excel_model: string
		device_sn: string
		device_imei: string
		device_appearance: string
		device_equipment: string
		device_stated_defect: string
	}
	comment?: string
	parts: []
	works: []
	sources: {
		sources_id: string
		sources_name: string
	}
}

export type GetOrdersRes = Order[]
export type GetStatusesRes = OrderStatusName[]

export const ordersRequests = {
	async getOrders(params: GetOrdersParams) {
		return $api.get<GetOrdersRes>('/orders', { params })
	},
	async createOrder(body: CreateOrderBody) {
		return $api.post<GetOrdersRes>('/neworder', { body })
	},
	async getStatusesNames() {
		return $api.get<GetStatusesRes>('/status')
	},
}
