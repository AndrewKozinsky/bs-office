import dayjs from 'dayjs'
import CallRecordPlayer from '../CallRecordPleer/CallRecordPlayer.tsx'
import CallsDaysPicker from '../CallsDaysPicker/CallsDaysPicker.tsx'
import { useCallsStore } from '../callsStore/callsStore.ts'
import CallsTable from '../CallsTable/CallsTable.tsx'
import SearchCallsForm from '../SearchCallsForm/SearchCallsForm.tsx'
import { useGetSetRecordDataToStore } from './fn/setRecordDataToStore.ts'
import { usePassValuesToParent, useSetParentValuesToStore } from './fn/setInitialValuesToStore.ts'
import './CallsRoot.scss'

type CallsRootProps = {
	parentSearchValue?: string
	parentStartDate?: null | dayjs.Dayjs
	parentEndDate?: null | dayjs.Dayjs
	setParentSearchValue?: (value: null | string) => void
	setParentStartDate?: (value: null | dayjs.Dayjs) => void
	setParentEndDate?: (value: null | dayjs.Dayjs) => void
}

function CallsRoot(props: CallsRootProps) {
	const {
		parentSearchValue = '',
		parentStartDate = null,
		parentEndDate = null,
		setParentSearchValue,
		setParentStartDate,
		setParentEndDate,
	} = props

	useSetParentValuesToStore(parentSearchValue, parentStartDate, parentEndDate)
	usePassValuesToParent(setParentSearchValue, setParentStartDate, setParentEndDate)

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
