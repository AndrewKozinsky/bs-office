import { Form, Input } from 'antd'
import React from 'react'
import {
	FieldType,
	FormNames,
	useGetOnClearInputChange,
	useGetOnSearchInputChange,
	useSetValueToInput,
} from './fn/onInputChange.ts'

type SearchCallsFormProps = {
	value: string
}

function SearchCallsForm(props: SearchCallsFormProps) {
	const { value } = props

	const [form] = Form.useForm()

	useSetValueToInput(form, value)
	const onSearchInputChange = useGetOnSearchInputChange()
	const onSearchInputClear = useGetOnClearInputChange()

	return (
		<Form form={form}>
			<Form.Item<FieldType>
				name={FormNames.search}
				label='Поиск по заказу, телефону или фамилии'
				layout='vertical'
			>
				<Input onInput={onSearchInputChange} allowClear onClear={onSearchInputClear} />
			</Form.Item>
		</Form>
	)
}

export default SearchCallsForm
