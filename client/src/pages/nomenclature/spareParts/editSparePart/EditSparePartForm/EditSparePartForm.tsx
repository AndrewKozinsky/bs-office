import React from 'react'
import { Button, Form, Input } from 'antd'
import { Printer, SparePart } from '../../../../../types/user.ts'
import { FormStatus } from '../../../../../utils/form.ts'
import { useEditSparePartStore } from '../editSparePartStore.ts'
import { FieldType, FormNames, useGetSparePartSparePartForm } from './fn/form.ts'
import { useGetOnEditSparePartFormSubmit } from './fn/submit.ts'

type EditSparePartFormProps = {
	sparePartData: SparePart
}

function EditSparePartForm(props: EditSparePartFormProps) {
	const { sparePartData } = props

	const [form] = Form.useForm()

	const formStatus = useEditSparePartStore((s) => s.formStatus)

	const onChangeEditSparePartDataForm = useGetSparePartSparePartForm(form)
	const onFormSubmit = useGetOnEditSparePartFormSubmit(sparePartData)

	return (
		<Form
			form={form}
			onChange={onChangeEditSparePartDataForm}
			onFinish={onFormSubmit}
			autoComplete='on'
			layout='vertical'
			disabled={[FormStatus.success, FormStatus.submitPending].includes(formStatus)}
		>
			<NameField sparePartData={sparePartData} />
			<SubmitFormButton />
		</Form>
	)
}

export default EditSparePartForm

type FieldProps = {
	sparePartData: SparePart
}

function NameField(props: FieldProps) {
	const { sparePartData } = props

	return (
		<Form.Item<FieldType>
			label='Название принтера:'
			name={FormNames.name}
			initialValue={sparePartData.name_parts}
			rules={[{ required: true, message: 'Напишите название принтера' }]}
		>
			<Input />
		</Form.Item>
	)
}

function SubmitFormButton() {
	const isFormValid = useEditSparePartStore((s) => s.isFormValid)
	const formStatus = useEditSparePartStore((s) => s.formStatus)

	const isDisabled = !isFormValid || [FormStatus.success, FormStatus.submitPending].includes(formStatus)

	return (
		<Button type='primary' htmlType='submit' disabled={isDisabled}>
			Сохранить
		</Button>
	)
}
