import React from 'react'
import { Button, Form, Input, Select, Typography } from 'antd'
import { useFetchMessageTemplates } from './fn/fetchData.ts'
import { useCreateSelectOptionsData, useGetChangeTemplatesSelectInput } from './fn/selectOptions.ts'
import { useGetSendSMS } from './fn/submit.ts'
import { useSMSNotificationStore } from './SMSNotificationStore.ts'

const { Title } = Typography
const { TextArea } = Input

export type FieldType = {
	messageTemplate?: string
	messageArea?: string
}

type SMSNotificationProps = {
	orderId: string
}

function SMSNotification(props: SMSNotificationProps) {
	const { orderId } = props

	useFetchMessageTemplates(orderId)

	const [form] = Form.useForm<FieldType>()
	useCreateSelectOptionsData()
	const smsTemplatesSelectOptions = useSMSNotificationStore((s) => s.smsTemplatesSelectOptions)
	const sendSMS = useGetSendSMS(form)
	const changeTemplatesSelectChange = useGetChangeTemplatesSelectInput(form)

	if (!orderId) {
		return <p>Не указан orderId</p>
	}

	return (
		<div>
			<Title level={3}>Оповещение по СМС</Title>
			<Form layout='vertical' form={form} onFinish={sendSMS}>
				<Form.Item<FieldType> label='Шаблон сообщения' name='messageTemplate'>
					<Select options={smsTemplatesSelectOptions} onChange={changeTemplatesSelectChange} />
				</Form.Item>
				<Form.Item<FieldType> label='Сообщение' name='messageArea'>
					<TextArea rows={2} />
				</Form.Item>
				<Form.Item>
					<Button htmlType='submit'>Отправить СМС</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default SMSNotification
