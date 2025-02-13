import React, { ReactNode } from 'react'
import { Typography } from 'antd'
import { useGetPageTitle } from '../PageContainerContext/fn/context.ts'
import './PageContainer.scss'

const { Title } = Typography

type PageContainerProps = {
	children: ReactNode
}

function PageContainer(props: PageContainerProps) {
	const { children } = props

	const pageTitle = useGetPageTitle()

	return (
		<div className='page-container'>
			<div className='page-container__content'>
				<Title>{pageTitle}</Title>
				{children}
			</div>
		</div>
	)
}

export default PageContainer
