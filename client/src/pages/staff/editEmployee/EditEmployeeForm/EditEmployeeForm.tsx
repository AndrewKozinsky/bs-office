import React from 'react'
import { Button, Form, Input } from 'antd'
import { Employee } from '../../../../types/user.ts'
import { formFieldRulers, FormStatus } from '../../../../utils/form.ts'
import { useEditEmployeeStore } from '../editEmployeeStore.ts'
import { FieldType, FormNames, useGetEditEmployeeForm } from './fn/form'
import { useGetOnCreateBoxFormSubmit } from './fn/submit.ts'
import './CreateParcelBoxForm.scss'

type CreateParcelBoxFormProps = {
	employee: Employee
}

function EditEmployeeForm(props: CreateParcelBoxFormProps) {
	const { employee } = props

	const [form] = Form.useForm()

	const formStatus = useEditEmployeeStore((s) => s.formStatus)

	const onChangeEditEmployeeDataLoginForm = useGetEditEmployeeForm(form)
	const onFormSubmit = useGetOnCreateBoxFormSubmit(employee)

	return (
		<Form
			form={form}
			onChange={onChangeEditEmployeeDataLoginForm}
			onFinish={onFormSubmit}
			autoComplete='on'
			layout='vertical'
			disabled={[FormStatus.success, FormStatus.submitPending].includes(formStatus)}
		>
			<NameField employee={employee} />
			<InnerPhoneField employee={employee} />
			<OuterPhoneField employee={employee} />
			<TelegramField employee={employee} />
			<ComputerNameField employee={employee} />
			<EmailField employee={employee} />
			<SubmitFormButton />
			{/*<FormWasNotSentMessage />*/}
		</Form>
	)
}

export default EditEmployeeForm

type FieldProps = {
	employee: Employee
}

function NameField(props: FieldProps) {
	const { employee } = props

	return (
		<Form.Item<FieldType> label='ФИО:' name={FormNames.name} initialValue={employee.staff_name}>
			<Input />
		</Form.Item>
	)
}

function InnerPhoneField(props: FieldProps) {
	const { employee } = props

	return (
		<Form.Item<FieldType>
			label='Внутренний номер:'
			name={FormNames.innerPhone}
			rules={[{ required: true, message: 'Напишите внутренний номер' }]}
			initialValue={employee.staff_internal_phone_nomber}
		>
			<Input type='number' />
		</Form.Item>
	)
}

function OuterPhoneField(props: FieldProps) {
	const { employee } = props

	return (
		<Form.Item<FieldType>
			label='Внешний номер:'
			name={FormNames.outerPhone}
			rules={[{ required: true, message: 'Напишите внешний номер' }]}
			initialValue={employee.staff_external_phone_nomber}
		>
			<Input type='number' />
		</Form.Item>
	)
}

function TelegramField(props: FieldProps) {
	const { employee } = props

	return (
		<Form.Item<FieldType>
			label='Телеграм:'
			name={FormNames.telegram}
			rules={[{ required: true, message: 'Напишите Телеграм' }]}
			initialValue={employee.staff_id_telegram}
		>
			<Input />
		</Form.Item>
	)
}

function ComputerNameField(props: FieldProps) {
	const { employee } = props

	return (
		<Form.Item<FieldType>
			label='Имя компьютера:'
			name={FormNames.computerName}
			rules={[{ required: true, message: 'Напишите имя компьютера' }]}
			initialValue={employee.staff_computer_name}
		>
			<Input />
		</Form.Item>
	)
}

function EmailField(props: FieldProps) {
	const { employee } = props

	return (
		<Form.Item<FieldType>
			label='Почта:'
			name={FormNames.email}
			rules={formFieldRulers.email}
			initialValue={employee.staff_email}
		>
			<Input />
		</Form.Item>
	)
}

function SubmitFormButton() {
	const isFormValid = useEditEmployeeStore((s) => s.isFormValid)
	const formStatus = useEditEmployeeStore((s) => s.formStatus)

	const isDisabled = !isFormValid || [FormStatus.success, FormStatus.submitPending].includes(formStatus)

	return (
		<Button type='primary' htmlType='submit' disabled={isDisabled}>
			Сохранить
		</Button>
	)
}

/*function FormWasNotSentMessage() {
	const formStatus = useEditEmployeeStore((s) => s.formStatus)
	const formError = useEditEmployeeStore((s) => s.formError)

	if (formStatus !== FormStatus.failure) {
		return null
	}

	return (
		<Alert
			message={formError}
			type='error'
			style={{ marginTop: '2rem' }}
		/>
	)
}*/
