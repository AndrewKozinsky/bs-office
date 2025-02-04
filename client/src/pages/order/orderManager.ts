import { Order } from '../../types/user.ts'

export const orderManager = {
	getClientPhone(order: Order): null | string {
		return order.end_user.user_phone || order.retail_user.user_phone
	},
	isOrderExists(order: Order) {
		return !!order.device.device_id
	},
}
