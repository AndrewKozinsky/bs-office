import React from 'react'
import { Button, Typography } from 'antd'
import { useGetOnPrintSticker } from './fn/onPrintStickerClick.ts'

const { Title } = Typography

type PrintStickerProps = {
	orderId: string
}

function PrintSticker(props: PrintStickerProps) {
	const { orderId } = props

	const onPrintSticker = useGetOnPrintSticker(orderId)

	return (
		<div>
			<Title level={3}>Печать наклейки</Title>
			<Button onClick={onPrintSticker}>Печатать</Button>
		</div>
	)
}

export default PrintSticker
