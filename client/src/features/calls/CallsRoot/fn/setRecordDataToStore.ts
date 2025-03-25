import { useCallback } from 'react'
import { useCallsStore } from '../../callsStore/callsStore.ts'

export function useGetSetRecordDataToStore() {
	return useCallback(function (data: { recordName: string; date: string }) {
		useCallsStore.setState({ currentRecordDate: data.date, currentRecordFileName: data.recordName })
	}, [])
}
