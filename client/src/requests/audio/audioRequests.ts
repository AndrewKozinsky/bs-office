import $api from '../http'
import StaffApiTypes from '../staff/staffApiTypes.ts'

export const audioRequests = {
	/**
	 * Получение записи телефонного разговора
	 * @param props — данные для нахождения записи
	 */
	async getBlobFile(props: {
		recordDateYear: string
		recordDateMonth: string
		recordDateDay: string
		recordName: string
	}) {
		try {
			// Вставка переменных в строку URL
			const url = `api/record/${props.recordDateYear}/${props.recordDateMonth}/${props.recordDateDay}/${props.recordName}`

			// Запрос аудио-данных
			const response = await fetch(url)
			if (!response.ok) {
				throw new Error(`Failed to fetch file: ${response.statusText}`)
			}

			// Получение бинарных данных
			const audioData = await response.arrayBuffer()
			console.log('Downloaded Size:', audioData.byteLength, 'bytes')

			// Создание объекта Blob из бинарных данных
			return new Blob([new Uint8Array(audioData)], { type: 'audio/wav' })
		} catch (error) {
			console.error('Error fetching or loading audio:', error)
		}
	},
}
