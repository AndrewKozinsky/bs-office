import React from 'react'
import CallsRoot from '../../../features/calls/CallsRoot/CallsRoot.tsx'
import PageContainer from '../../pageContainer/PageContainer/PageContainer.tsx'
import { useCallsPageStore } from '../callsPageStore/callsPageStore.ts'
import { useSetCallsPageTitle } from './fn/callsPageTitle.ts'
import { useSetPageAddressBarQuery, useSetPageAddressBarQueryToStore } from './fn/setPageAddressBarQuery.ts'

function CallsPage() {
	const searchValue = useCallsPageStore((s) => s.searchValue)
	const startDate = useCallsPageStore((s) => s.startDate)
	const endDate = useCallsPageStore((s) => s.endDate)

	const setSearchValue = (searchValue: string) => {
		useCallsPageStore.setState({ searchValue })
	}
	const setStartDate = (startDate: string) => {
		useCallsPageStore.setState({ startDate })
	}
	const setEndDate = (endDate: string) => {
		useCallsPageStore.setState({ endDate })
	}

	useSetCallsPageTitle()
	useSetPageAddressBarQueryToStore()
	useSetPageAddressBarQuery()

	return (
		<PageContainer>
			<CallsRoot
				parentSearchValue={searchValue}
				parentStartDate={startDate}
				parentEndDate={endDate}
				setSearchValue={setSearchValue}
				setStartDate={setStartDate}
				setEndDate={setEndDate}
			/>
		</PageContainer>
	)
}

export default CallsPage
