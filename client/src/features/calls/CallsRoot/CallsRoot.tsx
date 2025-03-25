import CallRecordPlayer from '../CallRecordPleer/CallRecordPlayer.tsx'
import CallsDaysPicker from '../CallsDaysPicker/CallsDaysPicker.tsx'
import { useCallsStore } from '../callsStore/callsStore.ts'
import CallsTable from '../CallsTable/CallsTable.tsx'
import SearchCallsForm from '../SearchCallsForm/SearchCallsForm.tsx'
import { useGetSetRecordDataToStore } from './fn/setRecordDataToStore.ts'
import { useSetParentValuesToStore } from './fn/setInitialValuesToStore.ts'
import './CallsRoot.scss'

type CallsRootProps = {
	parentSearchValue?: string
	parentStartDate?: string
	parentEndDate?: string
	setSearchValue?: (value: string) => void
	setStartDate?: (value: string) => void
	setEndDate?: (value: string) => void
}

function CallsRoot(props: CallsRootProps) {
	const {
		parentSearchValue = '',
		parentStartDate = null,
		parentEndDate = null,
		setSearchValue,
		setStartDate,
		setEndDate,
	} = props

	useSetParentValuesToStore(parentSearchValue, parentStartDate, parentEndDate)

	const startDate = useCallsStore((s) => s.startDate)
	const endDate = useCallsStore((s) => s.endDate)
	const searchValue = useCallsStore((s) => s.searchValue)

	const setRecordDataToStore = useGetSetRecordDataToStore()

	return (
		<div className='calls'>
			<div className='calls__top'>
				<SearchCallsForm value={searchValue} />
				<CallsDaysPicker startDate={startDate} endDate={endDate} />
			</div>
			<div className='calls__table'>
				<CallsTable
					startDate={startDate}
					endDate={endDate}
					searchValue={searchValue}
					passRecordData={setRecordDataToStore}
				/>
				<CallRecordPlayer />
			</div>
		</div>
	)
}

export default CallsRoot
