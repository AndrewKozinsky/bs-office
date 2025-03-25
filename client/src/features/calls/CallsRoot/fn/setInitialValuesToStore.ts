import { useEffect } from 'react'
import { useCallsStore } from '../../callsStore/callsStore.ts'

export function useSetParentValuesToStore(
	parentSearchValue?: string,
	parentStartDate?: string,
	parentEndDate?: string,
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
