import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { useSetPageTitle } from '../../../pageContainer/PageContainerContext/fn/context.ts'
import { pagesRoute } from '../../../pagesRoute.ts'
import { useCallsPageStore } from '../../callsPageStore/callsPageStore.ts'
import { convertDayJsToString } from '../../common.ts'

export function useSetCallsPageTitle() {
	const dateFormat = 'YYYY-MM-DD'
	const todayPageHeader = pagesRoute.calls.name + ' за сегодня'
	const yesterdayPageHeader = pagesRoute.calls.name + ' вчерашнего дня'
	const thisWeekPageHeader = pagesRoute.calls.name + ' этой недели'

	const startDate = useCallsPageStore((s) => s.startDate)
	const endDate = useCallsPageStore((s) => s.endDate)

	const [pageTitle, setPageTitle] = useState(todayPageHeader)
	useSetPageTitle(pageTitle)

	useEffect(
		function () {
			const mondayDate = dayjs().day(1)
			const yesterdayDate = dayjs().subtract(1, 'day')
			const todayDate = dayjs()

			if (!startDate && !endDate) {
				setPageTitle(todayPageHeader)
			} else if (
				convertDayJsToString(startDate) === convertDayJsToString(yesterdayDate) &&
				convertDayJsToString(endDate) === convertDayJsToString(yesterdayDate)
			) {
				setPageTitle(yesterdayPageHeader)
			} else if (
				convertDayJsToString(startDate) === convertDayJsToString(mondayDate) &&
				convertDayJsToString(endDate) === convertDayJsToString(todayDate)
			) {
				setPageTitle(thisWeekPageHeader)
			} else {
				setPageTitle(pagesRoute.calls.name)
			}
		},
		[startDate, endDate],
	)
}
