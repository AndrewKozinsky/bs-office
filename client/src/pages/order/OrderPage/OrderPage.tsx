import React from 'react'
import { useParams } from 'react-router-dom'
import PageContainer from '../../PageContainer/PageContainer.tsx'
import { pagesRoute } from '../../pagesRoute.ts'
import CallToClientForm from '../CallToClientForm/CallToClientForm.tsx'
import CustomerProfile from '../CustomerProfile/CustomerProfile.tsx'
import { useGetClientPhoneFromOrderData } from './fn/getCustomerPhone.ts'
import SMSNotification from '../SMSNotificationForm/SMSNotification.tsx'
import './OrderPage.scss'

function OrderPage() {
	let { orderId } = useParams()
	const clientPhone = useGetClientPhoneFromOrderData(orderId)

	return (
		<PageContainer header={pagesRoute.order('0').name}>
			<div className='order-page'>
				<CustomerProfile orderId={orderId} />
				{clientPhone && (
					<div>
						<SMSNotification orderId={orderId} clientPhone={clientPhone} />
						<CallToClientForm clientPhone={clientPhone} />
					</div>
				)}
			</div>
		</PageContainer>
	)
}

export default OrderPage
