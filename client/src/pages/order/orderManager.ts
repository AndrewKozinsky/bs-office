import { IOrder } from '../../types/user.ts'

export const orderManager = {
	getClientPhone(order: IOrder): null | string {
		return order.end_user.user_phone || order.retail_user.user_phone
	},
	isOrderExists(order: IOrder) {
		return !!order?.order_date
	},
}
