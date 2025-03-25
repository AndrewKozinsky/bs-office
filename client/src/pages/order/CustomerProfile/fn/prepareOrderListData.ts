import { IOrder } from '../../../../types/user.ts'

export function getOrderListData(order: IOrder) {
	return [
		{
			key: 'Заказчик',
			value: order.retail_user.user_name,
		},
		{
			key: 'Тип заказчика',
			value: order.retail_user.user_type,
		},
		{
			key: 'Номер телефона',
			value: order.retail_user.user_phone,
		},
		{
			key: 'Адрес',
			value: order.retail_user.user_address || order.retail_user.user_legal_address,
		},
		{
			key: 'Дата заказа',
			value: order.order_date,
		},
		{
			key: 'Марка',
			value: order.device.device_brand,
		},
		{
			key: 'Модель',
			value: order.device.device_model,
		},
		{
			key: 'Серийный номер модели',
			value: order.device.device_sn,
		},
		{
			key: 'Внешний вид',
			value: order.device.device_appearance,
		},
		{
			key: 'Комплектация',
			value: order.device.device_equipment,
		},

		{
			key: 'IMEI',
			value: order.device.device_imei,
		},
		{
			key: 'Дефект',
			value: order.device.device_stated_defect,
		},
		{
			key: 'Статус',
			value: order.order_status,
		},
		{
			key: 'Пункт приёма',
			value: order.order_branch,
		},
	]
}
