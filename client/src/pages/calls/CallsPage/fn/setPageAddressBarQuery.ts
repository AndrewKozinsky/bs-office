import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useCallsStore } from '../../callsStore/callsStore.ts'
import { DateRangeNames } from '../../types.ts'

export function useSetPageAddressBarQuery() {
	const [_, setSearchParams] = useSearchParams()

	const startDate = useCallsStore((s) => s.startDate)
	const endDate = useCallsStore((s) => s.endDate)

	useEffect(
		function () {
			const queryObj: { [DateRangeNames.startDate]?: string; [DateRangeNames.endDate]?: string } = {}

			if (startDate) {
				queryObj[DateRangeNames.startDate] = startDate
			}
			if (endDate) {
				queryObj[DateRangeNames.endDate] = endDate
			}

			setSearchParams(queryObj)
		},
		[startDate, endDate],
	)
}

export function useSetPageAddressBarQueryToStore() {
	const [searchParams] = useSearchParams()

	useEffect(function () {
		useCallsStore.setState({
			startDate: searchParams.get(DateRangeNames.startDate),
			endDate: searchParams.get(DateRangeNames.endDate),
		})
	}, [])
}
