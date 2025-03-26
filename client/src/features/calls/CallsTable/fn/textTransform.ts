import dayjs from 'dayjs'
import CallsApiTypes from '../../../../requests/calls/callsApiTypes.ts'
import { convertDayJsToString } from '../../common.ts'

export type PhoneRecordPreparedData = {
	office: string
	phoneNumber: string
	clientName: string
	orderPrefix: string
	orderNum: string
	orderNumFull: string
	rawDate: string
	humanReadableDate: string
	time: string
	// У звонка нулевая продолжительность?
	isZeroDuration: boolean
	humanReadableDuration: string
	callType: 'Внутренний' | 'Исходящий' | 'Входящий'
	callStatus: 'ANSWERED' | 'NO ANSWER' | 'FAILED' | 'BUSY'
	recordFileName: string // "external-101-79619235154-20250210-090217-1739160137.18879.wav"
}

export function prepareCellRecordData(cellRecord: CallsApiTypes.CallRecord): PhoneRecordPreparedData {
	const humanReadableDuration = convertDurationToHumanReadableFormat(cellRecord.call_bill_sec)
	const humanReadableDate = getDateFromDateAndTime(cellRecord.date_time)
	const time = getTimeFromDateAndTime(cellRecord.date_time)
	const zeroDuration = isZeroDuration(cellRecord.call_bill_sec)
	const { orderPrefix, orderNum } = splitOrderNumber(cellRecord.id_order)

	return {
		office: cellRecord.out_nomber,
		phoneNumber: cellRecord.in_number,
		clientName: cellRecord.name_user,
		orderPrefix,
		orderNum,
		orderNumFull: cellRecord.id_order,
		rawDate: cellRecord.date,
		humanReadableDate,
		time,
		isZeroDuration: zeroDuration,
		humanReadableDuration,
		callType: cellRecord.call_type,
		callStatus: cellRecord.call_status,
		recordFileName: cellRecord.record_file_name,
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

	const currentYear = dayjs().get('year')
	const dateYear = date.get('year')

	const today = dayjs().locale('ru-Ru')
	const yesterday = today.subtract(1, 'day')

	if (date.isSame(today, 'day')) {
		return 'сегодня'
	} else if (date.isSame(yesterday, 'day')) {
		return 'вчера'
	} else if (currentYear === dateYear) {
		return convertDayJsToString(date)
	} else {
		return convertDayJsToString(date)
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

function isZeroDuration(duration: string) {
	return duration === '00:00:00'
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
