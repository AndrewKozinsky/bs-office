import { Form, Select } from 'antd'
import { useCreateCustomersSelectOptionsData } from '../CustomerBlock/fn/data.ts'
import { useFetchCustomers } from '../CustomerBlock/fn/fetchData.ts'
import { useCustomerNameSearchChange } from '../CustomerBlock/fn/formInputs.ts'
import { useCustomerFormStore } from '../customerFormStore/customerFormStore.ts'

function SearchCustomerInput() {
	const [form] = Form.useForm()

	useFetchCustomers()
	useCreateCustomersSelectOptionsData()

	const onCustomerSearchNameChange = useCustomerNameSearchChange()

	const userNameSearch = useCustomerFormStore((s) => s.userNameSearch)
	const usersSelectOptions = useCustomerFormStore((s) => s.usersSelectOptions)

	return (
		<Form form={form} layout='vertical' className='new-order-form'>
			<Form.Item label='Имя заказчика ' rules={[{ required: true, message: 'Выберите заказчика' }]}>
				<Select
					options={usersSelectOptions}
					showSearch
					onSearch={onCustomerSearchNameChange}
					searchValue={userNameSearch}
					filterOption={false}
				/>
			</Form.Item>
		</Form>
	)
}

export default SearchCustomerInput
