import { useCallback, useEffect } from 'react'
import { audioRequests } from '../../../../requests/audio/audioRequests.ts'
import { callsRequests } from '../../../../requests/calls/callsRequests.ts'
import { useCallsStore } from '../../callsStore/callsStore.ts'

export function useIsPlayerVisible() {
	const recordFileName = useCallsStore((s) => s.currentRecordFileName)
	const recordDate = useCallsStore((s) => s.currentRecordDate)

	return isPlayerVisible({ recordFileName, recordDate })
}

function isPlayerVisible(data: { recordFileName: null | string; recordDate: null | string }) {
	return data.recordFileName && data.recordDate
}

export function useGetClosePlayer() {
	return useCallback(function () {
		useCallsStore.setState({ currentRecordFileName: null, currentRecordDate: null })
	}, [])
}

export function useGetDownloadAudio() {
	const fileName = useCallsStore((s) => s.currentRecordFileName)

	return useCallback(
		async function () {
			if (!fileName) return

			const blob = await audioRequests.getFile(fileName)
			const url = URL.createObjectURL(blob)
			const a = document.createElement('a')
			a.href = url
			a.download = fileName
			document.body.appendChild(a)
			a.click()
			document.body.removeChild(a)
			URL.revokeObjectURL(url)
		},
		[fileName],
	)
}

export function useTest() {
	const recordFileName = useCallsStore((s) => s.currentRecordFileName)
	const recordDate = useCallsStore((s) => s.currentRecordDate)

	useEffect(
		function () {
			if (!isPlayerVisible({ recordDate, recordFileName })) {
				return
			}

			makeFetch(recordDate, recordFileName)
		},
		[recordFileName, recordDate],
	)
}

async function makeFetch(recordDate: string, recordName: string) {
	const splitRecordDate = recordDate.split('-') // ["2025", "02", "24"]
	const recordYear = splitRecordDate[0]
	const recordMonth = splitRecordDate[1]
	const recordDay = splitRecordDate[2]

	try {
		const audioBlob = await callsRequests.getRecordedDetailsBlob({ recordYear, recordMonth, recordDay, recordName })

		// Создание URL для объекта Blob
		const audioUrl = URL.createObjectURL(audioBlob)

		// Установка источника для аудиоплеера
		// const audioPlayer = document.getElementById('audioPlayer')
		// audioPlayer.src = audioUrl
	} catch (error) {
		console.error('Error fetching or loading audio:', error)
	}

	/*function playAudio() {
		const audioPlayer = document.getElementById('audioPlayer')
		audioPlayer.play()
	}*/
}
