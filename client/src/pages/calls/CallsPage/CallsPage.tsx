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
	const fromDate = useCallsStore((s) => s.fromDate)
	const toDate = useCallsStore((s) => s.toDate)

	useSetCallsPageTitle()
	useSetPageAddressBarQueryToStore()
	useSetPageAddressBarQuery()

	return (
		<PageContainer>
			<div className='calls-page'>
				<div className='calls-page__top'>
					<SearchCallsForm />
					<CallsDaysPicker fromDate={fromDate} toDate={toDate} />
				</div>
				<div className='calls-page__table'>
					<CallsTable />
				</div>
			</div>
		</PageContainer>
	)
}

export default CallsPage
