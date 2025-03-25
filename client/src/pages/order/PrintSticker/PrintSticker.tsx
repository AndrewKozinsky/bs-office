import React from 'react'
import { Button, Typography } from 'antd'
import OrderContentContainer from '../OrderContentContainer/OrderContentContainer.tsx'
import { useGetOnPrintSticker } from './fn/onPrintStickerClick.ts'

type PrintStickerProps = {
	orderId: string
}

function PrintSticker(props: PrintStickerProps) {
	const { orderId } = props

	const onPrintSticker = useGetOnPrintSticker(orderId)

	return (
		<OrderContentContainer header='Печать наклейки'>
			<Button onClick={onPrintSticker}>Печатать</Button>
		</OrderContentContainer>
	)
}

export default PrintSticker
