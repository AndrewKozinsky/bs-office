import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useCallsStore } from '../../callsStore/callsStore.ts'
import { СallsPageQueryParams } from '../../types.ts'

export function useSetPageAddressBarQuery() {
	const [_, setSearchParams] = useSearchParams()

	const startDate = useCallsStore((s) => s.startDate)
	const endDate = useCallsStore((s) => s.endDate)
	const searchValue = useCallsStore((s) => s.searchValue)

	useEffect(
		function () {
			const queryObj: { [СallsPageQueryParams.startDate]?: string; [СallsPageQueryParams.endDate]?: string } = {}

			if (startDate) {
				queryObj[СallsPageQueryParams.startDate] = startDate
			}
			if (endDate) {
				queryObj[СallsPageQueryParams.endDate] = endDate
			}
			if (searchValue) {
				queryObj[СallsPageQueryParams.searchValue] = searchValue
			}

			setSearchParams(queryObj)
		},
		[startDate, endDate, searchValue],
	)
}

export function useSetPageAddressBarQueryToStore() {
	const [searchParams] = useSearchParams()

	useEffect(function () {
		useCallsStore.setState({
			startDate: searchParams.get(СallsPageQueryParams.startDate),
			endDate: searchParams.get(СallsPageQueryParams.endDate),
			searchValue: searchParams.get(СallsPageQueryParams.searchValue),
		})
	}, [])
}
