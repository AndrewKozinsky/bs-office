import { Radio, RadioChangeEvent } from 'antd'
import { CustomerFormTab, useCustomerFormStore } from '../customerFormStore/customerFormStore.ts'

function CustomerActionTabs() {
	const tab = useCustomerFormStore((s) => s.tab)

	const handleModeChange = (e: RadioChangeEvent) => {
		useCustomerFormStore.setState({ tab: e.target.value })
	}

	return (
		<Radio.Group onChange={handleModeChange} value={tab}>
			<Radio.Button value={CustomerFormTab.FindCustomer}>Поиск</Radio.Button>
			<Radio.Button value={CustomerFormTab.NewCustomer}>Новый</Radio.Button>
		</Radio.Group>
	)
}

export default CustomerActionTabs
