import { Typography } from 'antd'
import React, { ReactNode } from 'react'

const { Title } = Typography

type OrderContentContainerProps = {
	header: string
	children: ReactNode
}

function OrderContentContainer(props: OrderContentContainerProps) {
	const { header, children } = props

	return (
		<div>
			<Title level={3}>{header}</Title>
			{children}
		</div>
	)
}

export default OrderContentContainer
