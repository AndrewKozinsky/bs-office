import { useQuery } from '@tanstack/react-query'
import { callsRequests } from '../../../../requests/calls/callsRequests.ts'

export type FetchCallsArgs = {
	startDate: null | string
	endDate: null | string
	searchNumberValue: string
}

export function useFetchCalls(args: FetchCallsArgs) {
	const { startDate, endDate, searchNumberValue } = args

	const { error, data, isLoading } = useQuery({
		queryKey: ['getRecords', startDate, endDate, searchNumberValue],
		queryFn: async () => {
			const data = await callsRequests.getRecords({ startDate, endDate, searchNumberValue })
			return data.data
		},
	})

	return data
}
