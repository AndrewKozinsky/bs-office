import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useCallsPageStore } from '../../callsPageStore/callsPageStore.ts'
import { CallsPageQueryParams } from '../../types.ts'

export function useSetPageAddressBarQuery() {
	const [_, setSearchParams] = useSearchParams()

	const startDate = useCallsPageStore((s) => s.startDate)
	const endDate = useCallsPageStore((s) => s.endDate)
	const searchValue = useCallsPageStore((s) => s.searchValue)

	useEffect(
		function () {
			const queryObj: { [CallsPageQueryParams.startDate]?: string; [CallsPageQueryParams.endDate]?: string } = {}

			if (startDate) {
				queryObj[CallsPageQueryParams.startDate] = startDate
			}
			if (endDate) {
				queryObj[CallsPageQueryParams.endDate] = endDate
			}
			if (searchValue) {
				queryObj[CallsPageQueryParams.searchValue] = searchValue
			}

			setSearchParams(queryObj)
		},
		[startDate, endDate, searchValue],
	)
}

export function useSetPageAddressBarQueryToStore() {
	const [searchParams] = useSearchParams()

	useEffect(function () {
		useCallsPageStore.setState({
			startDate: searchParams.get(CallsPageQueryParams.startDate),
			endDate: searchParams.get(CallsPageQueryParams.endDate),
			searchValue: searchParams.get(CallsPageQueryParams.searchValue),
		})
	}, [])
}
