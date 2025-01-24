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
		<div className='order-card' onClick={onOrderClick}>
			<div className='order-card-part'>
				<h3 className='order-card__section-header'>Заказ</h3>
				<p className='order-card__header'>{order.order_id}</p>
				<div className='order-card__info'>
					<p className='order-card__prop'>
						<span className='order-card__prop-key'>Дата</span> {order.order_date}
					</p>
					<p className='order-card__prop'>
						<span className='order-card__prop-key'>Тип</span>
						{order.order_type}
					</p>
					<p className='order-card__prop'>
						<span className='order-card__prop-key'>Статус</span>
						{order.order_status}
					</p>
				</div>
			</div>
			<div className='order-card-part'>
				<h3 className='order-card__section-header'>Клиент</h3>
				<p className='order-card__header'>{order.retail_user.user_name}</p>
				<div className='order-card__info'>
					<p className='order-card__prop'>{order.retail_user.user_phone}</p>
					<p className='order-card__prop'>{order.retail_user.user_address}</p>
					<p className='order-card__prop'>{order.retail_user.user_type}</p>
				</div>
			</div>
			<div className='order-card-part'>
				<h3 className='order-card__section-header'>Устройство</h3>
				<p className='order-card__header'>{order.device.device_full_model}</p>
				<div className='order-card__info'>
					<p className='order-card__prop'>
						{order.device.device_appearance && (
							<>
								<span className='order-card__prop-key'>Внешний вид</span>{' '}
								{order.device.device_appearance}
							</>
						)}
					</p>
					<p className='order-card__prop'>
						{order.device.device_appearance && (
							<>
								<span className='order-card__prop-key'>Дефект</span> {order.device.device_stated_defect}
							</>
						)}
					</p>
					<p className='order-card__prop'>
						{order.device.device_equipment && (
							<>
								<span className='order-card__prop-key'>Комплектация</span>{' '}
								{order.device.device_equipment}
							</>
						)}
					</p>
				</div>
			</div>
		</div>
	)
}

export default OrderCard
