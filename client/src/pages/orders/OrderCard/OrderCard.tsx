import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'
import { pagesRoute } from '../../pagesRoute.ts'
import { parseOrderNumber } from './fn/onOrderClick.ts'
import './OrderCard.scss'

type OrderCardProps = {
	order: any
}

function OrderCard(props: OrderCardProps) {
	const { order } = props

	const orderNumber = parseOrderNumber(order.order_id)
	const statusNameClass: Record<typeof order.order_type, string> = {
		'Обслуживание картриджей': 'gray',
		Диагностика: 'orange',
		Оформление: 'blue',
		'К выдаче': 'green',
		'Выдан. Оплачен': 'red',
		'Запчасть в пути': 'yellow',
	}

	return (
		<Link to={pagesRoute.order(orderNumber).path} className='order-card'>
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
						<span
							className={cn(
								'order-card__status',
								'order-card__status--' + statusNameClass[order.order_status],
							)}
						>
							{order.order_status}
						</span>
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
		</Link>
	)
}

export default OrderCard
