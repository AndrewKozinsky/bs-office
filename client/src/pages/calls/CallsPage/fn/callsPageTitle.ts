import { useSetPageTitle } from '../../../pageContainer/PageContainerContext/fn/context.ts'
import { pagesRoute } from '../../../pagesRoute.ts'

export function useSetCallsPageTitle() {
	let pageTitle = pagesRoute.calls.name + ' за сегодня'

	useSetPageTitle(pageTitle)
}
