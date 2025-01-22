import React from 'react'
import { useGetOnOrderClick } from './fn/onOrderClick.ts'
import './OrderCard.scss'

type OrderCardProps = {
	order: any
}

function OrderCard(props: OrderCardProps) {
	const { order } = props

	const onOrderClick = useGetOnOrderClick(order.order_id)

	return (
		<div className='order-card-main' onClick={onOrderClick}>
			<div className='order-details-box'>
				<div className='order-details-main'>
					<h3>Заказ: {order.order_id}</h3>
					<p>Дата заказа: {order.order_date}</p>
					<p>Тип заказа: {order.order_type}</p>
					<p>Статус заказа: {order.order_status}</p>
				</div>
				<div className='order-dateils-user'>
					<h1>Клиент: {order.retail_user.user_name}</h1>
					<p>Номер телефона: {order.retail_user.user_phone}</p>
					<p>Адрес: {order.retail_user.user_address}</p>
					<p>Тип клиента: {order.retail_user.user_type}</p>
				</div>
				<div className='order-dateils-device'>
					<h1>Устройство: {order.device.device_full_model}</h1>
					<p>Внешний вид: {order.device.device_appearance}</p>
					<p>Дефект: {order.device.device_stated_defect}</p>
					<p>Комплектация: {order.device.device_equipment}</p>
				</div>
			</div>
		</div>
	)
}

export default OrderCard
