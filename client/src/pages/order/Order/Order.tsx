import React from 'react'
import { useParams } from 'react-router-dom'
import CallToClientForm from '../CallToClientForm/CallToClientForm.tsx'
import CustomerProfile from '../CustomerProfile/CustomerProfile.tsx'
import SMSNotification from '../SMSNotificationForm/SMSNotification.tsx'
import { useGetClientPhoneFromOrderData } from './fn/getCustomerPhone.ts'

function Order() {
	let { orderId } = useParams()

	const clientPhone = useGetClientPhoneFromOrderData(orderId)

	return (
		<>
			<CustomerProfile />
			<div>
				<SMSNotification orderId={orderId} />
				{clientPhone && <CallToClientForm clientPhone={clientPhone} />}
			</div>
		</>
	)
}

export default Order
