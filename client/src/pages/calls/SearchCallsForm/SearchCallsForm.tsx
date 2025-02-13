import { DatePicker, Form, FormProps, Input } from 'antd'
import React, { useEffect } from 'react'
import { FieldType, FormNames, useGetOnSearchInputChange, useSetValueToInput } from './fn/onInputChange.ts'

type SearchCallsFormProps = {
	value: string
}

function SearchCallsForm(props: SearchCallsFormProps) {
	const { value } = props

	const [form] = Form.useForm()

	useSetValueToInput(form, value)
	const onSearchInputChange = useGetOnSearchInputChange(form)

	return (
		<Form form={form}>
			<Form.Item<FieldType> name={FormNames.search} label='Поиск по номеру заказа или телефону' layout='vertical'>
				<Input onInput={onSearchInputChange} type='number' />
			</Form.Item>
		</Form>
	)
}

export default SearchCallsForm
