import React from 'react'
import { useParams } from 'react-router-dom'
import LoadingAnimation from '../../../common/components/LoadingAnimation/LoadingAnimation.tsx'
import { ordersQuery } from '../../../requests/orders/ordersQuery.ts'
import PageContainer from '../../pageContainer/PageContainer/PageContainer.tsx'
import { useSetPageTitle } from '../../pageContainer/PageContainerContext/fn/context.ts'
import { pagesRoute } from '../../pagesRoute.ts'
import CallToClientForm from '../CallToClientForm/CallToClientForm.tsx'
import CustomerProfile from '../CustomerProfile/CustomerProfile.tsx'
import PrintSticker from '../PrintSticker/PrintSticker.tsx'
import { useGetClientPhoneFromOrderData } from './fn/getCustomerPhone.ts'
import SMSNotification from '../SMSNotificationForm/SMSNotification.tsx'
import { orderManager } from '../orderManager.ts'
import './OrderPage.scss'

function OrderPage() {
	let { orderId } = useParams()

	useSetPageTitle(pagesRoute.order('0').name + ' ' + orderId)
	const getOrderRes = ordersQuery.getOrder(orderId).useQuery()
	const clientPhone = useGetClientPhoneFromOrderData(orderId)

	if (getOrderRes.isLoading) {
		return <LoadingAnimation />
	}

	if (getOrderRes.error) {
		return <p>Во время запроса произошла ошибка.</p>
	}

	if (!orderManager.isOrderExists(getOrderRes.data.data)) {
		return (
			<PageContainer>
				<div>Заказ не найден.</div>
			</PageContainer>
		)
	}

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
						<PrintSticker orderId={orderId} />
					</div>
				)}
			</div>
		</PageContainer>
	)
}

export default OrderPage
