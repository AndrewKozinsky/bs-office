import { Divider } from 'antd'
import CustomerForm from '../CustomerForm/CustomerForm.tsx'
import SearchCustomerInput from '../SearchCustomerInput/SearchCustomerInput.tsx'

function ExistingCustomerBlock() {
	return (
		<div>
			<SearchCustomerInput />
			<Divider />
			<CustomerForm />
		</div>
	)
}

export default ExistingCustomerBlock
