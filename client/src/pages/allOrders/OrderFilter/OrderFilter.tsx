import React from 'react'
import { Form, Input, Select } from 'antd'
import { useAllOrdersStore } from '../allPagesStore/allPagesStore.ts'
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

	const mastersOptions = useAllOrdersStore((s) => s.mastersSelectOptions)
	const deviceBrandsOptions = useAllOrdersStore((s) => s.deviceBrandsSelectOptions)
	const deviceTypesOptions = useAllOrdersStore((s) => s.deviceTypesSelectOptions)
	const orderStatusesOptions = useAllOrdersStore((s) => s.orderStatusesSelectOptions)

	const changeSearchInput = useGetChangeSearchInput()
	const handleMasterChange = useGetChangeSelectInput('masters')
	const handleDeviceTypesChange = useGetChangeSelectInput('deviceTypes')
	const handleDeviceBrandsChange = useGetChangeSelectInput('deviceBrands')
	const handleOrderStatusChange = useGetChangeSelectInput('orderStatuses')

	return (
		<Form name='basic' initialValues={{ remember: true }} layout='vertical' size='middle'>
			<Form.Item<FieldType> label='Универсальный поиск' name='orderNumber' rules={[{ required: false }]}>
				<Input onInput={changeSearchInput} autoFocus />
			</Form.Item>
			<Form.Item<FieldType> name='masters' label='Мастера' rules={[{ required: false }]}>
				<Select
					onChange={handleMasterChange}
					showSearch
					options={mastersOptions}
					disabled={!mastersOptions}
					loading={!mastersOptions}
				/>
			</Form.Item>
			<Form.Item<FieldType> name='deviceBrands' label='Марка устройства' rules={[{ required: false }]}>
				<Select
					onChange={handleDeviceTypesChange}
					showSearch
					options={deviceBrandsOptions}
					disabled={!deviceBrandsOptions}
					loading={!deviceBrandsOptions}
				/>
			</Form.Item>
			<Form.Item<FieldType> name='deviceTypes' label='Тип устройства' rules={[{ required: false }]}>
				<Select
					onChange={handleDeviceBrandsChange}
					showSearch
					options={deviceTypesOptions}
					disabled={!deviceTypesOptions}
					loading={!deviceTypesOptions}
				/>
			</Form.Item>
			<Form.Item<FieldType> name='orderStatuses' label='Статут заказа' rules={[{ required: false }]}>
				<Select
					onChange={handleOrderStatusChange}
					showSearch
					options={orderStatusesOptions}
					disabled={!orderStatusesOptions}
					loading={!orderStatusesOptions}
				/>
			</Form.Item>
		</Form>
	)
}

export default OrderFilter
