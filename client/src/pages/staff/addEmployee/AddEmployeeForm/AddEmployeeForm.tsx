import React from 'react'
import { Button, Form, Input } from 'antd'
import { formFieldRulers, FormStatus } from '../../../../utils/form.ts'
import { useAddEmployeeStore } from '../addEmployeeStore.ts'
import { FieldType, FormNames, useGetAddEmployeeForm } from './fn/form'
import { useGetOnAddEmployeeFormSubmit } from './fn/submit.ts'

function AddEmployeeForm() {
	const [form] = Form.useForm()

	const formStatus = useAddEmployeeStore((s) => s.formStatus)

	const onChangeAddEmployeeDataLoginForm = useGetAddEmployeeForm(form)
	const onFormSubmit = useGetOnAddEmployeeFormSubmit()

	return (
		<Form
			form={form}
			onChange={onChangeAddEmployeeDataLoginForm}
			onFinish={onFormSubmit}
			autoComplete='on'
			layout='vertical'
			disabled={[FormStatus.success, FormStatus.submitPending].includes(formStatus)}
		>
			<NameField />
			<InnerPhoneField />
			<OuterPhoneField />
			<TelegramField />
			<ComputerNameField />
			<EmailField />
			<SubmitFormButton />
		</Form>
	)
}

export default AddEmployeeForm

function NameField() {
	return (
		<Form.Item<FieldType>
			label='ФИО:'
			name={FormNames.name}
			rules={[{ required: true, message: 'Напишите ФИО сотрудника' }]}
		>
			<Input />
		</Form.Item>
	)
}

function InnerPhoneField() {
	return (
		<Form.Item<FieldType>
			label='Внутренний номер:'
			name={FormNames.innerPhone}
			rules={[{ required: true, message: 'Напишите внутренний номер' }]}
		>
			<Input type='number' />
		</Form.Item>
	)
}

function OuterPhoneField() {
	return (
		<Form.Item<FieldType>
			label='Внешний номер:'
			name={FormNames.outerPhone}
			rules={[{ required: true, message: 'Напишите внешний номер' }]}
		>
			<Input type='number' />
		</Form.Item>
	)
}

function TelegramField() {
	return (
		<Form.Item<FieldType>
			label='Телеграм:'
			name={FormNames.telegram}
			rules={[{ required: true, message: 'Напишите Телеграм' }]}
		>
			<Input />
		</Form.Item>
	)
}

function ComputerNameField() {
	return (
		<Form.Item<FieldType>
			label='Имя компьютера:'
			name={FormNames.computerName}
			rules={[{ required: true, message: 'Напишите имя компьютера' }]}
		>
			<Input />
		</Form.Item>
	)
}

function EmailField() {
	return (
		<Form.Item<FieldType> label='Почта:' name={FormNames.email} rules={formFieldRulers.email}>
			<Input />
		</Form.Item>
	)
}

function SubmitFormButton() {
	const isFormValid = useAddEmployeeStore((s) => s.isFormValid)
	const formStatus = useAddEmployeeStore((s) => s.formStatus)

	const isDisabled = !isFormValid || [FormStatus.success, FormStatus.submitPending].includes(formStatus)

	return (
		<Button type='primary' htmlType='submit' disabled={isDisabled}>
			Сохранить
		</Button>
	)
}
