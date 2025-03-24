import React from 'react'
import { Button, Form, Input } from 'antd'
import { Printer } from '../../../../../types/user.ts'
import { FormStatus } from '../../../../../utils/form.ts'
import { useEditPrinterStore } from '../editPrinterStore.ts'
import { FieldType, FormNames, useGetEditPrinterForm } from './fn/form.ts'
import { useGetOnEditPrinterFormSubmit } from './fn/submit.ts'

type EditPrinterFormProps = {
	printerData: Printer
}

function EditPrinterForm(props: EditPrinterFormProps) {
	const { printerData } = props

	const [form] = Form.useForm()

	const formStatus = useEditPrinterStore((s) => s.formStatus)

	const onChangeEditPrinterDataForm = useGetEditPrinterForm(form)
	const onFormSubmit = useGetOnEditPrinterFormSubmit(printerData)

	return (
		<Form
			form={form}
			onChange={onChangeEditPrinterDataForm}
			onFinish={onFormSubmit}
			autoComplete='on'
			layout='vertical'
			disabled={[FormStatus.success, FormStatus.submitPending].includes(formStatus)}
		>
			<LocationField printerData={printerData} />
			<NameField printerData={printerData} />
			<AddressField printerData={printerData} />
			<SubmitFormButton />
		</Form>
	)
}

export default EditPrinterForm

type FieldProps = {
	printerData: Printer
}

function LocationField(props: FieldProps) {
	const { printerData } = props

	return (
		<Form.Item<FieldType>
			label='Местоположение:'
			name={FormNames.location}
			initialValue={printerData.printer_location}
			rules={[{ required: true, message: 'Напишите местоположение' }]}
		>
			<Input />
		</Form.Item>
	)
}

function NameField(props: FieldProps) {
	const { printerData } = props

	return (
		<Form.Item<FieldType>
			label='Название принтера:'
			name={FormNames.name}
			initialValue={printerData.printer_name}
			rules={[{ required: true, message: 'Напишите название принтера' }]}
		>
			<Input />
		</Form.Item>
	)
}

function AddressField(props: FieldProps) {
	const { printerData } = props

	return (
		<Form.Item<FieldType>
			label='Адрес:'
			name={FormNames.url}
			initialValue={printerData.printer_url}
			rules={[{ required: true, message: 'Напишите адрес' }]}
		>
			<Input />
		</Form.Item>
	)
}

function SubmitFormButton() {
	const isFormValid = useEditPrinterStore((s) => s.isFormValid)
	const formStatus = useEditPrinterStore((s) => s.formStatus)

	const isDisabled = !isFormValid || [FormStatus.success, FormStatus.submitPending].includes(formStatus)

	return (
		<Button type='primary' htmlType='submit' disabled={isDisabled}>
			Сохранить
		</Button>
	)
}
