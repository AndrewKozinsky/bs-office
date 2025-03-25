import React, { useCallback, useEffect } from 'react'
import { audioRequests } from '../../../../requests/audio/audioRequests.ts'
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
	const recordDate = useCallsStore((s) => s.currentRecordDate)
	const fileName = useCallsStore((s) => s.currentRecordFileName)

	return useCallback(
		async function () {
			if (!recordDate || !fileName) return

			const [recordDateYear, recordDateMonth, recordDateDay] = recordDate.split('-')
			const blob = await audioRequests.getBlobFile({
				recordDateYear,
				recordDateMonth,
				recordDateDay,
				recordName: fileName,
			})

			const url = URL.createObjectURL(blob)
			const a = document.createElement('a')
			a.href = url
			a.download = fileName
			document.body.appendChild(a)
			a.click()
			document.body.removeChild(a)
			URL.revokeObjectURL(url)
		},
		[recordDate, fileName],
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
			if (!isVisible) return

			downloadRecordAndSetToPlayer(audioPlayerRef, recordDate, recordFileName)
		},
		[recordFileName, recordDate, isVisible],
	)
}

async function downloadRecordAndSetToPlayer(
	audioPlayerRef: React.RefObject<HTMLAudioElement>,
	recordDate: string,
	recordFileName: string,
) {
	const [recordDateYear, recordDateMonth, recordDateDay] = recordDate.split('-')
	const blob = await audioRequests.getBlobFile({
		recordDateYear,
		recordDateMonth,
		recordDateDay,
		recordName: recordFileName,
	})

	audioPlayerRef.current.src = URL.createObjectURL(blob)
}
