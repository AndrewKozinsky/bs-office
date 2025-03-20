import $api from '../../components/http'
import StickerApiTypes from './stickerApiTypes.ts'
import CallsApiTypes from './stickerApiTypes.ts'

export const stickerRequests = {
	// Печать наклейки
	async printSticker(orderId: string) {
		return $api.get<StickerApiTypes.PrintSticker>('/print_stiker_js/' + orderId)
	},
}
