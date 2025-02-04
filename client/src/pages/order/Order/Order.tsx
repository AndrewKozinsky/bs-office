import { Typography } from 'antd'
import React from 'react'
import { useParams } from 'react-router-dom'
import CustomerProfile from '../CustomerProfile/CustomerProfile.tsx'
import SMSNotification from '../SMSNotification/SMSNotification.tsx'

const { Title } = Typography

function Order() {
	let { orderId } = useParams()

	return (
		<>
			<CustomerProfile />
			<div>
				<Title level={2}>Оповещение клиента</Title>
				<SMSNotification orderId={orderId} />
			</div>
		</>
	)
}

export default Order
