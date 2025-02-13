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
			if (!isPlayerVisible({ recordFileName, recordDate })) {
				return
			}

			// record_file_name
			// date
			callsRequests.getRecordedDetails({ recordDate, recordFileName }).then((response) => {
				return response.data
			})

			/*const response = axios.get(`order/record/${recordDate}/${recordFileName}`).then((response) => {
				console.log(response)
				return response.data
			})*/

			/*try {
				const data = await response.json()
				return data
				// setSelectedRecord({ name, data })
				// setIsModalOpen(true)
				// handleSearchTermChange({})
			} catch (error) {
				console.log(error)
			}*/
		},
		[recordFileName, recordDate],
	)
}
