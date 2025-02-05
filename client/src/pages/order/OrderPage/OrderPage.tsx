import React from 'react'
import { useParams } from 'react-router-dom'
import PageContainer from '../../pageContainer/PageContainer/PageContainer.tsx'
import { useSetPageTitle } from '../../pageContainer/PageContainerContext/fn/context.ts'
import { pagesRoute } from '../../pagesRoute.ts'
import CallToClientForm from '../CallToClientForm/CallToClientForm.tsx'
import CustomerProfile from '../CustomerProfile/CustomerProfile.tsx'
import { useGetClientPhoneFromOrderData } from './fn/getCustomerPhone.ts'
import SMSNotification from '../SMSNotificationForm/SMSNotification.tsx'
import './OrderPage.scss'

function OrderPage() {
	let { orderId } = useParams()

	useSetPageTitle(pagesRoute.order('0').name)
	const clientPhone = useGetClientPhoneFromOrderData(orderId)

	return (
		<PageContainer>
			<div className='order-page'>
				<div className='order-page__left'>
					<CustomerProfile orderId={orderId} />
				</div>
				{clientPhone && (
					<div className='order-page__right'>
						<SMSNotification orderId={orderId} clientPhone={clientPhone} />
						<CallToClientForm clientPhone={clientPhone} />
					</div>
				)}
			</div>
		</PageContainer>
	)
}

export default OrderPage
