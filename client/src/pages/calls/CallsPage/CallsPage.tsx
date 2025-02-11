import React from 'react'
import PageContainer from '../../pageContainer/PageContainer/PageContainer.tsx'
import CallsDaysPicker from '../CallsDaysPicker/CallsDaysPicker.tsx'
import { useCallsStore } from '../callsStore/callsStore.ts'
import CallsTable from '../CallsTable/CallsTable.tsx'
import SearchCallsForm from '../SearchCallsForm/SearchCallsForm.tsx'
import { useSetCallsPageTitle } from './fn/callsPageTitle.ts'
import { useSetPageAddressBarQuery, useSetPageAddressBarQueryToStore } from './fn/setPageAddressBarQuery.ts'
import './CallsPage.scss'

function CallsPage() {
	const startDate = useCallsStore((s) => s.startDate)
	const endDate = useCallsStore((s) => s.endDate)
	const searchNumberValue = useCallsStore((s) => s.searchNumberValue)

	useSetCallsPageTitle()
	useSetPageAddressBarQueryToStore()
	useSetPageAddressBarQuery()

	return (
		<PageContainer>
			<div className='calls-page'>
				<div className='calls-page__top'>
					<SearchCallsForm />
					<CallsDaysPicker startDate={startDate} endDate={endDate} />
				</div>
				<div className='calls-page__table'>
					<CallsTable startDate={startDate} endDate={endDate} searchNumberValue={searchNumberValue} />
				</div>
			</div>
		</PageContainer>
	)
}

export default CallsPage
