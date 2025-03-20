import { useCallback } from 'react'
import { stickerRequests } from '../../../../requests/sticker/stickerRequests.ts'

export function useGetOnPrintSticker(orderId: string) {
	return useCallback(async function () {
		try {
			const response = await stickerRequests.printSticker(orderId)
		} catch (error) {
			alert(`Ошибка: ${error.message}`)
		}
	}, [])
}
