import React from 'react'
import { Button, Form, Input, Select } from 'antd'
import { FormStatus } from '../../../../../utils/form.ts'
import { useAddMessageTemplateStore } from '../addMessageTemplateStore.ts'
import { FieldType, FormNames, useGetAddMessageTemplateForm } from './fn/form.ts'
import { useGetOnAddMessageTemplateFormSubmit } from './fn/submit.ts'

const { Option } = Select

function AddMessageTemplateForm() {
	const [form] = Form.useForm()

	const formStatus = useAddMessageTemplateStore((s) => s.formStatus)

	const onChangeAddMessageTemplateForm = useGetAddMessageTemplateForm(form)
	const onFormSubmit = useGetOnAddMessageTemplateFormSubmit()

	return (
		<Form
			form={form}
			onChange={onChangeAddMessageTemplateForm}
			onFinish={onFormSubmit}
			autoComplete='on'
			layout='vertical'
			disabled={[FormStatus.success, FormStatus.submitPending].includes(formStatus)}
		>
			<TypeField />
			<TemplateField />
			<SubmitFormButton />
		</Form>
	)
}

export default AddMessageTemplateForm

function TypeField() {
	return (
		<Form.Item<FieldType>
			label='Тип шаблона:'
			name={FormNames.type}
			rules={[{ required: true, message: 'Выберите тип' }]}
		>
			<Select>
				<Option value='SMS'>SMS</Option>
				<Option value='TG'>TG</Option>
				<Option value='Звонок'>Звонок</Option>
			</Select>
		</Form.Item>
	)
}

function TemplateField() {
	return (
		<Form.Item<FieldType>
			label='Шаблон:'
			name={FormNames.template}
			rules={[{ required: true, message: 'Напишите текст шаблона' }]}
		>
			<Input placeholder='Заказ {number} готов, приходите на {adress}' />
		</Form.Item>
	)
}

function SubmitFormButton() {
	const isFormValid = useAddMessageTemplateStore((s) => s.isFormValid)
	const formStatus = useAddMessageTemplateStore((s) => s.formStatus)

	const isDisabled = !isFormValid || [FormStatus.success, FormStatus.submitPending].includes(formStatus)

	return (
		<Button type='primary' htmlType='submit' disabled={isDisabled}>
			Сохранить
		</Button>
	)
}
