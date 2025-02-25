import React, { useCallback, useEffect } from 'react'
import { audioRequests } from '../../../../requests/audio/audioRequests.ts'
import { callsRequests } from '../../../../requests/calls/callsRequests.ts'
import { useCallsStore } from '../../callsStore/callsStore.ts'

export function useIsPlayerVisible() {
	const recordFileName = useCallsStore((s) => s.currentRecordFileName)
	const recordDate = useCallsStore((s) => s.currentRecordDate)

	return isPlayerVisible({ recordFileName, recordDate })
}

function isPlayerVisible(data: { recordFileName: null | string; recordDate: null | string }): boolean {
	return !!data.recordFileName && !!data.recordDate
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

export function useDownloadAudioAndSetToAudioElem(
	audioPlayerRef: React.RefObject<HTMLAudioElement>,
	isVisible: boolean,
) {
	const recordFileName = useCallsStore((s) => s.currentRecordFileName)
	const recordDate = useCallsStore((s) => s.currentRecordDate)

	useEffect(
		function () {
			if (!isVisible) {
				return
			}

			downloadAudio(recordDate, recordFileName).then((audioBlob) => {
				const $audioPlayer = audioPlayerRef.current

				console.log(audioBlob)
				// Создание URL для объекта Blob и установка источника
				// $audioPlayer.src = URL.createObjectURL(audioBlob)
			})
		},
		[recordFileName, recordDate, isVisible],
	)
}

async function downloadAudio(recordDate: string, recordName: string) {
	const splitRecordDate = recordDate.split('-') // ["2025", "02", "24"]
	const recordYear = splitRecordDate[0]
	const recordMonth = splitRecordDate[1]
	const recordDay = splitRecordDate[2]

	try {
		return await callsRequests.getRecordedDetailsBlob({ recordYear, recordMonth, recordDay, recordName })
	} catch (error) {
		console.error('Error fetching or loading audio:', error)
	}
}
