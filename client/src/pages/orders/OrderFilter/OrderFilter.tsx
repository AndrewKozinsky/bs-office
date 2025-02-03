import React from 'react'
import { Form, Input, Select } from 'antd'
import { searchByLabelInSelectInput } from '../../../common/formUtils.ts'
import { useOrdersStore } from '../ordersStore/ordersStore.ts'
import { useGetChangeSearchInput, useGetChangeSelectInput } from './fn/changeInput.ts'
import { useCreateSelectOptionsData } from './fn/createSelectOptions.ts'
import { useFetchData } from './fn/fetchData.ts'
import './OrderFilter.scss'

export type FieldType = {
	orderNumber: string
	masters: string
	deviceBrands: string
	deviceTypes: string
	orderStatuses: string
}

function OrderFilter() {
	useFetchData()
	useCreateSelectOptionsData()

	const mastersOptions = useOrdersStore((s) => s.mastersSelectOptions)
	const deviceBrandsOptions = useOrdersStore((s) => s.deviceBrandsSelectOptions)
	const deviceTypesOptions = useOrdersStore((s) => s.deviceTypesSelectOptions)
	const orderStatusesOptions = useOrdersStore((s) => s.orderStatusesSelectOptions)

	const changeSearchInput = useGetChangeSearchInput()
	const handleMasterChange = useGetChangeSelectInput('masters')
	const handleDeviceTypesChange = useGetChangeSelectInput('deviceTypes')
	const handleDeviceBrandsChange = useGetChangeSelectInput('deviceBrands')
	const handleOrderStatusChange = useGetChangeSelectInput('orderStatuses')

	return (
		<Form initialValues={{ remember: true }} layout='vertical' size='middle'>
			<Form.Item label='Универсальный поиск' rules={[{ required: false }]}>
				<Input onInput={changeSearchInput} autoFocus />
			</Form.Item>
			<Form.Item label='Мастера' rules={[{ required: false }]}>
				<Select
					onChange={handleMasterChange}
					showSearch
					filterOption={searchByLabelInSelectInput}
					options={mastersOptions}
					disabled={!mastersOptions}
					loading={!mastersOptions}
				/>
			</Form.Item>
			<Form.Item label='Марка устройства' rules={[{ required: false }]}>
				<Select
					onChange={handleDeviceTypesChange}
					showSearch
					filterOption={searchByLabelInSelectInput}
					options={deviceBrandsOptions}
					disabled={!deviceBrandsOptions}
					loading={!deviceBrandsOptions}
				/>
			</Form.Item>
			<Form.Item label='Тип устройства' rules={[{ required: false }]}>
				<Select
					onChange={handleDeviceBrandsChange}
					showSearch
					filterOption={searchByLabelInSelectInput}
					options={deviceTypesOptions}
					disabled={!deviceTypesOptions}
					loading={!deviceTypesOptions}
				/>
			</Form.Item>
			<Form.Item label='Статут заказа' rules={[{ required: false }]}>
				<Select
					onChange={handleOrderStatusChange}
					showSearch
					filterOption={searchByLabelInSelectInput}
					options={orderStatusesOptions}
					disabled={!orderStatusesOptions}
					loading={!orderStatusesOptions}
				/>
			</Form.Item>
		</Form>
	)
}

export default OrderFilter
