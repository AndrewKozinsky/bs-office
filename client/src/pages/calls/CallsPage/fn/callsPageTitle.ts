import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { useSetPageTitle } from '../../../pageContainer/PageContainerContext/fn/context.ts'
import { pagesRoute } from '../../../pagesRoute.ts'
import { useCallsStore } from '../../callsStore/callsStore.ts'

export function useSetCallsPageTitle() {
	const dateFormat = 'YYYY-MM-DD'
	const todayPageHeader = pagesRoute.calls.name + ' за сегодня'
	const yesterdayPageHeader = pagesRoute.calls.name + ' вчерашнего дня'
	const thisWeekPageHeader = pagesRoute.calls.name + ' этой недели'

	const fromDate = useCallsStore((s) => s.fromDate)
	const toDate = useCallsStore((s) => s.toDate)

	const [pageTitle, setPageTitle] = useState(todayPageHeader)
	useSetPageTitle(pageTitle)

	useEffect(
		function () {
			const mondayDateStr = dayjs().day(1).format(dateFormat)
			const yesterdayDateStr = dayjs().subtract(1, 'day').format(dateFormat)
			const todayDateStr = dayjs().format(dateFormat)

			if (!fromDate && !toDate) {
				setPageTitle(todayPageHeader)
			} else if (fromDate === yesterdayDateStr && toDate === yesterdayDateStr) {
				setPageTitle(yesterdayPageHeader)
			} else if (fromDate === mondayDateStr && toDate === todayDateStr) {
				setPageTitle(thisWeekPageHeader)
			} else {
				setPageTitle(pagesRoute.calls.name)
			}
		},
		[fromDate, toDate],
	)
}
