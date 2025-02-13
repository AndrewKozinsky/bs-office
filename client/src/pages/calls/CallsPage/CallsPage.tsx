import React from 'react'
import PageContainer from '../../pageContainer/PageContainer/PageContainer.tsx'
import CallRecordPlayer from '../CallRecordPleer/CallRecordPlayer.tsx'
import CallsDaysPicker from '../CallsDaysPicker/CallsDaysPicker.tsx'
import { useCallsStore } from '../callsStore/callsStore.ts'
import CallsTable from '../CallsTable/CallsTable.tsx'
import SearchCallsForm from '../SearchCallsForm/SearchCallsForm.tsx'
import { useSetCallsPageTitle } from './fn/callsPageTitle.ts'
import { useSetPageAddressBarQuery, useSetPageAddressBarQueryToStore } from './fn/setPageAddressBarQuery.ts'
import { useGetSetRecordDataToStore } from './fn/setRecordDataToStore.ts'
import './CallsPage.scss'

function CallsPage() {
	const startDate = useCallsStore((s) => s.startDate)
	const endDate = useCallsStore((s) => s.endDate)
	const searchValue = useCallsStore((s) => s.searchValue)

	useSetCallsPageTitle()
	useSetPageAddressBarQueryToStore()
	useSetPageAddressBarQuery()

	const setRecordDataToStore = useGetSetRecordDataToStore()

	return (
		<PageContainer>
			<div className='calls-page'>
				<div className='calls-page__top'>
					<SearchCallsForm value={searchValue} />
					<CallsDaysPicker startDate={startDate} endDate={endDate} />
				</div>
				<div className='calls-page__table'>
					<CallsTable
						startDate={startDate}
						endDate={endDate}
						searchValue={searchValue}
						passRecordData={setRecordDataToStore}
					/>
					<CallRecordPlayer />
				</div>
			</div>
		</PageContainer>
	)
}

export default CallsPage
