import React from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../../../common/components/Loading/Loading.tsx'
import CallsRoot from '../../../features/calls/CallsRoot/CallsRoot.tsx'
import { ordersQuery } from '../../../requests/orders/ordersQuery.ts'
import { getOrderNumberFrom1cOrderId } from '../../../utils/order.ts'
import PageContainer from '../../pageContainer/PageContainer/PageContainer.tsx'
import { useSetPageTitle } from '../../pageContainer/PageContainerContext/fn/context.ts'
import { pagesRoute } from '../../pagesRoute.ts'
import CallToClientForm from '../CallToClientForm/CallToClientForm.tsx'
import CustomerProfile from '../CustomerProfile/CustomerProfile.tsx'
import OrderContentContainer from '../OrderContentContainer/OrderContentContainer.tsx'
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
		return <Loading />
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

	const pureOrderId = getOrderNumberFrom1cOrderId(getOrderRes.data.data.order_id)

	return (
		<PageContainer>
			<div className='order-page'>
				<div className='order-page__top'>
					<div className='order-page__top-left'>
						<CustomerProfile orderId={orderId} />
					</div>
					{clientPhone && (
						<div className='order-page__top-right'>
							<SMSNotification orderId={orderId} clientPhone={clientPhone} />
							<CallToClientForm clientPhone={clientPhone} />
							<PrintSticker orderId={orderId} />
						</div>
					)}
				</div>
				<OrderContentContainer header='Звонки по этому заказу'>
					<CallsRoot parentSearchValue={pureOrderId} />
				</OrderContentContainer>
			</div>
		</PageContainer>
	)
}

export default OrderPage
