import React from 'react'
import { Alert, Button, Form, Input, Select, Typography } from 'antd'
import { useFetchMessageTemplates } from './fn/fetchData.ts'
import { checkNotificationForm, FieldNames, FieldType } from './fn/form.ts'
import {
	useCreateSelectOptionsData,
	useGetChangeSMSTextarea,
	useGetChangeTemplatesSelectInput,
} from './fn/selectOptions.ts'
import { useGetSendSMS } from './fn/submit.ts'
import { useSMSNotificationStore } from './SMSNotificationStore.ts'

const { Title } = Typography
const { TextArea } = Input

type SMSNotificationProps = {
	orderId: string
}

function SMSNotification(props: SMSNotificationProps) {
	const { orderId } = props

	useFetchMessageTemplates(orderId)

	const [form] = Form.useForm<FieldType>()
	useCreateSelectOptionsData()
	const smsTemplatesSelectOptions = useSMSNotificationStore((s) => s.smsTemplatesSelectOptions)
	const isFormValid = useSMSNotificationStore((s) => s.isFormValid)
	const changeTemplatesSelectChange = useGetChangeTemplatesSelectInput(form)
	const changeSMSTextarea = useGetChangeSMSTextarea()
	const sendSMS = useGetSendSMS(form)

	if (!orderId) {
		return <p>Не указан orderId</p>
	}

	return (
		<div>
			<Title level={3}>Оповещение по СМС</Title>
			<Form layout='vertical' form={form} onFinish={sendSMS} onChange={() => checkNotificationForm(form)}>
				<Form.Item<FieldType> label='Шаблон сообщения' name={FieldNames.messageTemplates}>
					<Select options={smsTemplatesSelectOptions} onChange={changeTemplatesSelectChange} />
				</Form.Item>
				<Form.Item<FieldType>
					label='Сообщение'
					name={FieldNames.message}
					rules={[{ required: true, message: 'Требуется сообщение' }]}
				>
					<TextArea rows={2} onChange={changeSMSTextarea} />
				</Form.Item>
				<TooManySMSNotification />
				<Form.Item style={{ textAlign: 'right' }}>
					<Button htmlType='submit' disabled={!isFormValid} type='primary'>
						Отправить СМС
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default SMSNotification

function TooManySMSNotification() {
	const smsCountToSendText = useSMSNotificationStore((s) => s.smsCountToSendText)

	if (smsCountToSendText <= 1) return null

	const text = `Для отправки сообщения потребуется ${smsCountToSendText} сообщения`

	return (
		<Form.Item>
			<Alert message={text} type='warning' />
		</Form.Item>
	)
}
