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

	const startDate = useCallsStore((s) => s.startDate)
	const endDate = useCallsStore((s) => s.endDate)

	const [pageTitle, setPageTitle] = useState(todayPageHeader)
	useSetPageTitle(pageTitle)

	useEffect(
		function () {
			const mondayDateStr = dayjs().day(1).format(dateFormat)
			const yesterdayDateStr = dayjs().subtract(1, 'day').format(dateFormat)
			const todayDateStr = dayjs().format(dateFormat)

			if (!startDate && !endDate) {
				setPageTitle(todayPageHeader)
			} else if (startDate === yesterdayDateStr && endDate === yesterdayDateStr) {
				setPageTitle(yesterdayPageHeader)
			} else if (startDate === mondayDateStr && endDate === todayDateStr) {
				setPageTitle(thisWeekPageHeader)
			} else {
				setPageTitle(pagesRoute.calls.name)
			}
		},
		[startDate, endDate],
	)
}
