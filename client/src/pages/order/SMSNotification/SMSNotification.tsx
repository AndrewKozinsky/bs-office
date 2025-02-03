import { Typography } from 'antd'
import React from 'react'
import { useFetchMessageTemplates } from './fn/fetchData.ts'
import './SMSNotification.scss'

const { Title } = Typography

function SMSNotification() {
	useFetchMessageTemplates()
	// const order = useOrderStore((s) => s.order)

	return (
		<div className='sms-notification'>
			<Title level={2}>Оповещение клиента</Title>
		</div>
	)
}

export default SMSNotification
