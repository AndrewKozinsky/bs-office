import { useMemo } from 'react'
import { useCallsStore } from '../../callsStore/callsStore.ts'
import { PhoneRecordPreparedData } from './textTransform.ts'

export function useIsRowSelected(preparedData: PhoneRecordPreparedData) {
	const recordFileName = useCallsStore((s) => s.currentRecordFileName)
	const recordDate = useCallsStore((s) => s.currentRecordDate)

	return useMemo(
		function () {
			return recordFileName === preparedData.recordFileName && recordDate === preparedData.rawDate
		},
		[recordFileName, recordDate],
	)
}
