import React from 'react'
import LoadingAnimation from '../../../common/components/LoadingAnimation/LoadingAnimation.tsx'
import NoOrderFound from '../NoOrderFound/NoOrderFound.tsx'
import { useFetchOrder } from './fn/fetchData.ts'
import { useCustomerProfileStore } from './customerProfileStore.ts'
import { getOrderListData } from './fn/prepareOrderListData.ts'
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
