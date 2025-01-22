import { PaginationProps } from 'antd/es/pagination/Pagination'
import React from 'react'
import { Pagination } from 'antd'
import './PagePagination.scss'

type CenterPaginationProps = PaginationProps & {
	isVisible?: boolean
}

function PagePagination(props: CenterPaginationProps) {
	const { isVisible } = props

	if (isVisible) return null

	return (
		<div className='page-pagination'>
			<Pagination align='center' {...props} />
		</div>
	)
}

export default PagePagination
