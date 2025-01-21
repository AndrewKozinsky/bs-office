import React, { useEffect, useState } from 'react'

type OrderCardProps = {
	order: any
	toggleDetails: any
	isOpen: boolean
}

function OrderCard(props: OrderCardProps) {
	const { order, toggleDetails, isOpen } = props

	const [showDetails, setShowDetails] = useState(isOpen)

	useEffect(() => {
		setShowDetails(isOpen)
	}, [isOpen])

	const parseOrderNumber = (text) => {
		const orderNumberRegex = /00НФ-0*(\d+)/
		const match = text.match(orderNumberRegex)

		if (match) {
			return match[1]
		} else {
			return null
		}
	}

	const handleClick = (event) => {
		event.preventDefault()
		const orderNumber = parseOrderNumber(order.order_id)
		if (orderNumber) {
			const searchUrl = `https://order.service-centr.com/SearchOrder?orderNumber=${orderNumber}`
			window.open(searchUrl, '_blank')
		} else {
			console.error('Failed to parse order number from link:', order.order_id)
		}
	}

	return (
		<>
			<div className={'order-card'} onClick={handleClick}>
				<div className={'order-card-main'}>
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
			</div>
		</>
	)
}

export default OrderCard
