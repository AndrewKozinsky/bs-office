import { useQuery } from '@tanstack/react-query'
import { callsRequests } from '../../../../requests/calls/callsRequests.ts'

export type FetchCallsArgs = {
	startDate: null | string
	endDate: null | string
	searchValue: string
}

export function useFetchCalls(args: FetchCallsArgs) {
	const { startDate, endDate, searchValue } = args

	const { error, data, isLoading } = useQuery({
		queryKey: ['getRecords', startDate, endDate, searchValue],
		queryFn: async () => {
			const data = await callsRequests.getRecords({ startDate, endDate, searchValue })
			return data.data
		},
	})

	return { error, callsArr: data, isLoading }
}
