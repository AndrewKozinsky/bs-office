import { Spin } from 'antd'
import React from 'react'
import './LoadingAnimation.scss'

function LoadingAnimation() {
	/*return (
		<div className='loading-animation'>
			{' '}
			<img src='/pic/LogoAnims.svg' alt='' />
		</div>
	)*/
	return <Spin />
}

export default LoadingAnimation
