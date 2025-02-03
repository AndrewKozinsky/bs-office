import React from 'react'
import CustomerProfile from '../CustomerProfile/CustomerProfile.tsx'
import SMSNotification from '../SMSNotification/SMSNotification.tsx'

function Order() {
	return (
		<>
			<CustomerProfile />
			<div>
				<SMSNotification />
			</div>
		</>
	)
}

export default Order
