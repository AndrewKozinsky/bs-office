import { Spin } from 'antd'
import React from 'react'
import './Loading.scss'

function Loading() {
	/*return (
		<div className='loading-animation'>
			{' '}
			<img src='/pic/LogoAnims.svg' alt='' />
		</div>
	)*/
	return <Spin />
}

export default Loading
