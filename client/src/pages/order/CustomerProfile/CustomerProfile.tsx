import React from 'react'
import { getOrderListData } from './fn/prepareOrderListData.ts'
import { ordersQuery } from '../../../requests/orders/ordersQuery.ts'
import './CustomerProfile.scss'

type CustomerProfileProps = {
	orderId: string
}

function CustomerProfile(props: CustomerProfileProps) {
	const { orderId } = props

	const getOrderRes = ordersQuery.getOrder(orderId).useQuery()

	const order = getOrderRes.data?.data
	if (!order) {
		return null
	}

	return (
		<div className='customer-profile'>
			{getOrderListData(order).map((rowData) => {
				if (rowData.value && rowData.value !== '-') {
					return (
						<React.Fragment key={rowData.key}>
							<span className='customer-profile__row-key'>{rowData.key}:</span>
							{rowData.value}
						</React.Fragment>
					)
				}

				return (
					<React.Fragment key={rowData.key}>
						<span className='customer-profile__row-key customer-profile__row-key--gray'>{rowData.key}</span>
						<span />
					</React.Fragment>
				)
			})}
		</div>
	)
}

export default CustomerProfile
