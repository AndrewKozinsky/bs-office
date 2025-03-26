import dayjs from 'dayjs'
import { useEffect } from 'react'
import { useCallsStore } from '../../callsStore/callsStore.ts'

export function useSetParentValuesToStore(
	parentSearchValue?: string,
	parentStartDate?: null | dayjs.Dayjs,
	parentEndDate?: null | dayjs.Dayjs,
) {
	useEffect(
		function () {
			useCallsStore.setState({
				searchValue: parentSearchValue,
				startDate: parentStartDate,
				endDate: parentEndDate,
			})
		},
		[parentSearchValue, parentStartDate, parentEndDate],
	)
}

export function usePassValuesToParent(
	setParentSearchValue?: (value: null | string) => void,
	setParentStartDate?: (value: null | dayjs.Dayjs) => void,
	setParentEndDate?: (value: null | dayjs.Dayjs) => void,
) {
	const searchValue = useCallsStore((s) => s.searchValue)
	const startDate = useCallsStore((s) => s.startDate)
	const endDate = useCallsStore((s) => s.endDate)

	useEffect(
		function () {
			if (setParentSearchValue) {
				setParentSearchValue(searchValue)
			}
		},
		[searchValue],
	)

	useEffect(
		function () {
			if (setParentStartDate) {
				setParentStartDate(startDate)
			}
		},
		[startDate],
	)

	useEffect(
		function () {
			if (setParentEndDate) {
				setParentEndDate(endDate)
			}
		},
		[endDate],
	)
}
