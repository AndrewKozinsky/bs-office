import dayjs from 'dayjs'
import CallsApiTypes from '../../../../requests/calls/callsApiTypes.ts'

export type PhoneRecordPreparedData = {
	office: string
	phoneNumber: string
	clientName: string
	orderPrefix: string
	orderNum: string
	orderNumFull: string
	date: string
	time: string
	duration: string
	callType: string
}

export function prepareCellRecordData(cellRecord: CallsApiTypes.CallRecord): PhoneRecordPreparedData {
	const duration = convertDurationToHumanReadableFormat(cellRecord.call_bill_sec)
	const date = getDateFromDateAndTime(cellRecord.date_time)
	const time = getTimeFromDateAndTime(cellRecord.date_time)
	const { orderPrefix, orderNum } = splitOrderNumber(cellRecord.id_order)

	return {
		office: cellRecord.out_nomber,
		phoneNumber: cellRecord.in_number,
		clientName: cellRecord.name_user,
		orderPrefix,
		orderNum,
		orderNumFull: cellRecord.id_order,
		date,
		time,
		duration,
		callType: cellRecord.call_status,
	}
}

/**
 * Получает строку продолжительности и переводит в формат для чтения человеком:
 * Продолжительность указывать в секундах если меньше минуты:
 * 0 сек.
 * 32 сек.
 *
 * В минутах если меньше часа:
 * 4 мин. 18 сек.
 *
 * Часах и минутах во всех остальных случаях:
 * 2 ч. 54 мин.
 * @param duration — продолжительность в формате 00:01:57
 */
function convertDurationToHumanReadableFormat(duration: string) {
	const [hours, minutes, seconds] = duration.split(':').map(Number)

	if (hours === 0 && minutes === 0) {
		return `${seconds} сек.`
	} else if (hours === 0) {
		return minutes > 0 && seconds > 0 ? `${minutes} мин. ${seconds} сек.` : `${minutes} мин.`
	} else {
		return minutes > 0 ? `${hours} h. ${minutes} мин.` : `${hours} ч.`
	}
}

/**
 * Получает строку в формате "2025-02-10 09:02:28" и возвращает
 * строку 'сегодня' если это текущий день
 * строку 'вчера' если это вчерашний день
 * в противном случае строку вида 10 фев.
 * @param dateAndTime — строка в формате "2025-02-10 09:02:28"
 */
function getDateFromDateAndTime(dateAndTime: string) {
	const date = dayjs(dateAndTime, 'YYYY-MM-DD HH:mm:ss')

	const today = dayjs().locale('ru-Ru')
	const yesterday = today.subtract(1, 'day')

	if (date.isSame(today, 'day')) {
		return 'сегодня'
	} else if (date.isSame(yesterday, 'day')) {
		return 'вчера'
	} else {
		return date.format('DD MMMM')
	}
}

/**
 * Получает строку в формате "2025-02-10 09:02:28" и возвращает
 * строку 'сегодня' если это текущий день
 * строку 'вчера' если это вчерашний день
 * в противном случае строку вида 10 фев.
 * @param dateAndTime — строка в формате "2025-02-10 09:02:28"
 */
function getTimeFromDateAndTime(dateAndTime: string) {
	return dateAndTime.split(' ')[1]
}

/**
 * Получает строку вида '00НФ-024218'
 * и превращает в объект {orderPrefix: '00НФ', orderNum: '024218'}
 * @param fullOrderNum — строка вида '00НФ-024218'
 */
function splitOrderNumber(fullOrderNum: string): { orderPrefix: string; orderNum: string } {
	try {
		const [orderPrefix, orderNum] = fullOrderNum.split('-')
		if (!orderPrefix || !orderNum) {
			throw new Error('')
		}

		return { orderPrefix, orderNum }
	} catch (e) {
		return {
			orderPrefix: '',
			orderNum: '',
		}
	}
}
