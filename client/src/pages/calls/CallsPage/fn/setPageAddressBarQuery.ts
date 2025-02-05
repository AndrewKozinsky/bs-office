import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useCallsStore } from '../../callsStore/callsStore.ts'
import { DateRangeNames } from '../../types.ts'

export function useSetPageAddressBarQuery() {
	const [_, setSearchParams] = useSearchParams()

	const fromDate = useCallsStore((s) => s.fromDate)
	const toDate = useCallsStore((s) => s.toDate)

	useEffect(
		function () {
			const queryObj: { [DateRangeNames.fromDate]?: string; [DateRangeNames.toDate]?: string } = {}

			if (fromDate) {
				queryObj.fromDate = fromDate
			}
			if (toDate) {
				queryObj.toDate = toDate
			}

			setSearchParams(queryObj)
		},
		[fromDate, toDate],
	)
}

export function useSetPageAddressBarQueryToStore() {
	const [searchParams] = useSearchParams()

	useEffect(function () {
		useCallsStore.setState({
			fromDate: searchParams.get(DateRangeNames.fromDate),
			toDate: searchParams.get(DateRangeNames.toDate),
		})
	}, [])
}
