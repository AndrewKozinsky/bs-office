import React, { ReactNode } from 'react'
import { Typography } from 'antd'
import './PageContainer.scss'

const { Title } = Typography

type PageContainerProps = {
	header: string
	children: ReactNode
}

function PageContainer(props: PageContainerProps) {
	const { header, children } = props

	return (
		<div className='page-container'>
			<Title>{header}</Title>
			{children}
		</div>
	)
}

export default PageContainer
