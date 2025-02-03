import React from 'react'
import { Typography } from 'antd'
import CustomerBlock from '../../customer/CustomerBlock/CustomerBlock.tsx'
import { useNewOrderContainersStore } from '../newOrderContainersStore/newOrderContainersStore.ts'
import './NewOrderContainers.scss'

const { Title } = Typography

function NewOrderContainers() {
	const isUserSelected = useNewOrderContainersStore((s) => s.isUserSelected)

	return (
		<div className='new-order-containers'>
			<div className='new-order-container__left'>
				<Title level={2}>Клиент</Title>
				<CustomerBlock />
			</div>
			{isUserSelected && (
				<div className='new-order-container__right'>
					<Title level={2}>Заказы</Title>
				</div>
			)}
		</div>
	)
}

export default NewOrderContainers
