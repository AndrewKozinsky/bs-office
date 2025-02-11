import { DatePicker, Form, FormProps, Input } from 'antd'
import React from 'react'
import { useGetOnSearchInputChange } from './fn/onInputChange.ts'

export enum FormNames {
	search = 'search',
}

export type FieldType = Record<FormNames, string>

function SearchCallsForm() {
	const onSearchInputChange = useGetOnSearchInputChange()

	return (
		<Form style={{ maxWidth: 600 }} initialValues={{ remember: true }}>
			<Form.Item<FieldType> name={FormNames.search} label='Номер заказа' layout='vertical'>
				<Input onInput={onSearchInputChange} />
			</Form.Item>
		</Form>
	)
}

export default SearchCallsForm
