import React from 'react'
import { Button, Form, Input } from 'antd'
import { FormStatus } from '../../../../../utils/form.ts'
import { useAddSparePartStore } from '../addSparePartStore.ts'
import { FieldType, FormNames, useGetAddSparePartForm } from './fn/form.ts'
import { useGetOnAddSparePartFormSubmit } from './fn/submit.ts'

function AddSparePartForm() {
	const [form] = Form.useForm()

	const formStatus = useAddSparePartStore((s) => s.formStatus)

	const onChangeAddSparePartForm = useGetAddSparePartForm(form)
	const onFormSubmit = useGetOnAddSparePartFormSubmit()

	return (
		<Form
			form={form}
			onChange={onChangeAddSparePartForm}
			onFinish={onFormSubmit}
			autoComplete='on'
			layout='vertical'
			disabled={[FormStatus.success, FormStatus.submitPending].includes(formStatus)}
		>
			<NameField />
			<SubmitFormButton />
		</Form>
	)
}

export default AddSparePartForm

function NameField() {
	return (
		<Form.Item<FieldType>
			label='Имя:'
			name={FormNames.name}
			rules={[{ required: true, message: 'Напишите название запасной части' }]}
		>
			<Input />
		</Form.Item>
	)
}

function SubmitFormButton() {
	const isFormValid = useAddSparePartStore((s) => s.isFormValid)
	const formStatus = useAddSparePartStore((s) => s.formStatus)

	const isDisabled = !isFormValid || [FormStatus.success, FormStatus.submitPending].includes(formStatus)

	return (
		<Button type='primary' htmlType='submit' disabled={isDisabled}>
			Сохранить
		</Button>
	)
}
