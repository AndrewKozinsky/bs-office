import React from 'react'
import { Button, Form, Input, Select } from 'antd'
import { MessageTemplate } from '../../../../../types/user.ts'
import { FormStatus } from '../../../../../utils/form.ts'
import { useEditMessageTemplateStore } from '../editMessageTemplateStore.ts'
import { FieldType, FormNames, useGetEditMessageTemplateForm } from './fn/form.ts'
import { useGetOnEditMessageTemplateFormSubmit } from './fn/submit.ts'

const { Option } = Select

type EditMessageTemplateFormProps = {
	messageTemplateData: MessageTemplate
}

function EditMessageTemplateForm(props: EditMessageTemplateFormProps) {
	const { messageTemplateData } = props

	const [form] = Form.useForm()

	const formStatus = useEditMessageTemplateStore((s) => s.formStatus)

	const onChangeEditMessageTemplateDataForm = useGetEditMessageTemplateForm(form)
	const onFormSubmit = useGetOnEditMessageTemplateFormSubmit(messageTemplateData)

	return (
		<Form
			form={form}
			onChange={onChangeEditMessageTemplateDataForm}
			onFinish={onFormSubmit}
			autoComplete='on'
			layout='vertical'
			disabled={[FormStatus.success, FormStatus.submitPending].includes(formStatus)}
		>
			<TypeField messageTemplateData={messageTemplateData} />
			<TemplateField messageTemplateData={messageTemplateData} />
			<SubmitFormButton />
		</Form>
	)
}

export default EditMessageTemplateForm

type FieldProps = {
	messageTemplateData: MessageTemplate
}

function TypeField(props: FieldProps) {
	const { messageTemplateData } = props

	return (
		<Form.Item<FieldType>
			label='Тип шаблона:'
			name={FormNames.type}
			initialValue={messageTemplateData.template_type}
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

function TemplateField(props: FieldProps) {
	const { messageTemplateData } = props

	return (
		<Form.Item<FieldType>
			label='Шаблон:'
			name={FormNames.template}
			initialValue={messageTemplateData.template_text}
			rules={[{ required: true, message: 'Напишите текст шаблона' }]}
		>
			<Input placeholder='Заказ {number} готов, приходите на {adress}' />
		</Form.Item>
	)
}

function SubmitFormButton() {
	const isFormValid = useEditMessageTemplateStore((s) => s.isFormValid)
	const formStatus = useEditMessageTemplateStore((s) => s.formStatus)

	const isDisabled = !isFormValid || [FormStatus.success, FormStatus.submitPending].includes(formStatus)

	return (
		<Button type='primary' htmlType='submit' disabled={isDisabled}>
			Сохранить
		</Button>
	)
}
