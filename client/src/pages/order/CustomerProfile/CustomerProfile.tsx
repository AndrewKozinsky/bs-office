import React from 'react'
import LoadingAnimation from '../../../common/components/LoadingAnimation/LoadingAnimation.tsx'
import NoOrderFound from '../NoOrderFound/NoOrderFound.tsx'
import { useFetchOrder } from './fn/fetchData.ts'
import { useCustomerProfileStore } from './customerProfileStore.ts'
import './CustomerProfile.scss'

type CustomerProfileProps = {
	orderId: string
}

function CustomerProfile(props: CustomerProfileProps) {
	const { orderId } = props

	useFetchOrder(orderId)

	const order = useCustomerProfileStore((s) => s.order)
	const loadingOrder = useCustomerProfileStore((s) => s.loadingOrder)

	if (loadingOrder) {
		return <LoadingAnimation />
	}

	if (!loadingOrder && !order) {
		return <NoOrderFound />
	}

	return (
		<div className='customer-profile'>
			<p className='customer-profile__row'>
				<span className='customer-profile__row-key'>Заказчик:</span>
				{order.retail_user.user_name}
			</p>
			<p className='customer-profile__row'>
				<span className='customer-profile__row-key'>Тип заказчика:</span>
				{order.retail_user.user_type}
			</p>
			<p className='customer-profile__row'>
				<span className='customer-profile__row-key'>Номер телефона:</span>
				{order.retail_user.user_phone}
			</p>
			<p className='customer-profile__row'>
				<span className='customer-profile__row-key'>Адрес:</span>
				{order.retail_user.user_address || order.retail_user.user_legal_address}
			</p>
			<p className='customer-profile__row'>
				<span className='customer-profile__row-key'>Дата заказа:</span>
				{order.order_date}
			</p>
			<p className='customer-profile__row'>
				<span className='customer-profile__row-key'>Модель устройства:</span>
				{order.device.device_brand}
			</p>
			<p className='customer-profile__row'>
				<span className='customer-profile__row-key'>Внешний вид:</span>
				{order.device.device_appearance}
			</p>
			<p className='customer-profile__row'>
				<span className='customer-profile__row-key'>Комплектация:</span>
				{order.device.device_equipment}
			</p>
			<p className='customer-profile__row'>
				<span className='customer-profile__row-key'>Номер модели:</span>
				{order.device.device_model}
			</p>
			<p className='customer-profile__row'>
				<span className='customer-profile__row-key'>Статус:</span>
				{order.order_status}
			</p>
			<p className='customer-profile__row'>
				<span className='customer-profile__row-key'>Серийный номер модели:</span>
				{order.device.device_id}
			</p>
			<p className='customer-profile__row'>
				<span className='customer-profile__row-key'>IMEI:</span>
				{order.device.device_imei}
			</p>
			<p className='customer-profile__row'>
				<span className='customer-profile__row-key'>Пункт приёма:</span>
				{order.order_branch}
			</p>
			<p className='customer-profile__row'>
				<span className='customer-profile__row-key'>Дефект:</span>
				{order.device.device_stated_defect}
			</p>
		</div>
	)
}

export default CustomerProfile
