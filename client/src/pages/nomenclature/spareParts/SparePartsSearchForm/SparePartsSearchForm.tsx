import React from 'react'
import { Form, Input } from 'antd'
import { FieldType, FormNames, useGetOnSearchInputChange } from './fn/onInputChange.ts'

function SparePartsSearchForm() {
	const onSearchInputChange = useGetOnSearchInputChange()

	return (
		<Form style={{ maxWidth: 440 }} initialValues={{ remember: true }} autoComplete='off'>
			<Form.Item<FieldType> label='Поиск по названию' name={FormNames.search}>
				<Input onInput={onSearchInputChange} />
			</Form.Item>
		</Form>
	)
}

export default SparePartsSearchForm
