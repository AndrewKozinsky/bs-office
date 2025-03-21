import React from 'react'
import { Button, Form, Input } from 'antd'
import { formFieldRulers, FormStatus } from '../../../../../utils/form.ts'
import { useAddPrinterStore } from '../addPrinterStore.ts'
import { FieldType, FormNames, useGetAddPrinterForm } from './fn/form.ts'
import { useGetOnAddPrinterFormSubmit } from './fn/submit.ts'

function AddPrinterForm() {
	const [form] = Form.useForm()

	const formStatus = useAddPrinterStore((s) => s.formStatus)

	const onChangeAddPrinterForm = useGetAddPrinterForm(form)
	const onFormSubmit = useGetOnAddPrinterFormSubmit()

	return (
		<Form
			form={form}
			onChange={onChangeAddPrinterForm}
			onFinish={onFormSubmit}
			autoComplete='on'
			layout='vertical'
			disabled={[FormStatus.success, FormStatus.submitPending].includes(formStatus)}
		>
			<LocationField />
			<NameField />
			<AddressField />
			<SubmitFormButton />
		</Form>
	)
}

export default AddPrinterForm

function LocationField() {
	return (
		<Form.Item<FieldType>
			label='Местоположение:'
			name={FormNames.location}
			rules={[{ required: true, message: 'Напишите местоположение' }]}
		>
			<Input />
		</Form.Item>
	)
}

function NameField() {
	return (
		<Form.Item<FieldType>
			label='Имя:'
			name={FormNames.name}
			rules={[{ required: true, message: 'Напишите ФИО сотрудника' }]}
		>
			<Input />
		</Form.Item>
	)
}

function AddressField() {
	return (
		<Form.Item<FieldType>
			label='Адрес:'
			name={FormNames.url}
			rules={[{ required: true, message: 'Напишите адрес' }]}
		>
			<Input />
		</Form.Item>
	)
}

function SubmitFormButton() {
	const isFormValid = useAddPrinterStore((s) => s.isFormValid)
	const formStatus = useAddPrinterStore((s) => s.formStatus)

	const isDisabled = !isFormValid || [FormStatus.success, FormStatus.submitPending].includes(formStatus)

	return (
		<Button type='primary' htmlType='submit' disabled={isDisabled}>
			Сохранить
		</Button>
	)
}
