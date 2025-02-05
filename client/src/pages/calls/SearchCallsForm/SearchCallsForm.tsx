import { DatePicker, Form, FormProps, Input } from 'antd'
import React from 'react'

export enum FormNames {
	search = 'search',
}

export type FieldType = Record<FormNames, string>

function SearchCallsForm() {
	return (
		<Form style={{ maxWidth: 600 }} initialValues={{ remember: true }}>
			<Form.Item<FieldType> name={FormNames.search} label='Номер заказа' layout='vertical'>
				<Input />
			</Form.Item>
		</Form>
	)
}

export default SearchCallsForm
