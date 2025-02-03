import { CustomerFormTab, useCustomerFormStore } from '../customerFormStore/customerFormStore.ts'
import CustomerActionTabs from '../CustomerActionTabs/CustomerActionTabs.tsx'
import ExistingCustomerBlock from '../ExistingCustomerBlock/ExistingCustomerBlock.tsx'
import NewCustomerBlock from '../NewCustomerBlock/NewCustomerBlock.tsx'
import './CustomerBlock.scss'

function CustomerBlock() {
	const tab = useCustomerFormStore((s) => s.tab)

	return (
		<div className='customer-block'>
			<CustomerActionTabs />
			{tab === CustomerFormTab.FindCustomer && <ExistingCustomerBlock />}
			{tab === CustomerFormTab.NewCustomer && <NewCustomerBlock />}
		</div>
	)
}

export default CustomerBlock
