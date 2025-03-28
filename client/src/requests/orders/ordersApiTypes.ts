import { IOrder, IOrderStatusName } from '../../types/user.ts'

namespace OrdersApiTypes {
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
		device: {
			device_model_id: '000005165'
			device_brand_id: string
			device_type_id: string
			device_sn: string
			device_imei: string
			device_appearance: string
			device_equipment: string
			device_defect: string
			work_description: string
		}
		// id из 1С
		master: string
		// Если выбрали гарантийный ремонт, то нужно найти
		// номер этого заказа и вписать сюда
		order_id: string
		// order_repair_condition: string
		oredr_change_date: ''
		// Дата продажи устройства.
		// Это требуется только когда физическое лицо и Авторизованный ремонт
		retail_order_date: string
		// Если клиент уже есть, то передаётся только идентификатор, если нет,
		// то создаётся новый и вписываются все детали кроме идентификатора пользователя
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
	}

	export type GetOrdersRes = IOrder[]
	export type GetOrderRes = IOrder
	export type GetStatusesRes = IOrderStatusName[]
}

export default OrdersApiTypes
