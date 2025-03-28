import React from 'react'
import { Alert, Button, Form, Input, Select, Typography } from 'antd'
import { messageTemplateQuery } from '../../../requests/messageTemplate/messageTemplateQuery.ts'
import OrderContentContainer from '../OrderContentContainer/OrderContentContainer.tsx'
import { checkNotificationForm, FieldNames, FieldType } from './fn/form.ts'
import {
	useCreateSelectOptionsData,
	useGetChangeSMSTextarea,
	useGetChangeTemplatesSelectInput,
} from './fn/selectOptions.ts'
import { useGetSendSMS } from './fn/submit.ts'
import { useSMSNotificationStore } from './SMSNotificationStore.ts'

const { TextArea } = Input

type SMSNotificationProps = {
	orderId: string
	clientPhone: string
}

function SMSNotification(props: SMSNotificationProps) {
	const { orderId, clientPhone } = props

	const [form] = Form.useForm<FieldType>()
	useCreateSelectOptionsData(orderId)
	const smsTemplatesSelectOptions = useSMSNotificationStore((s) => s.smsTemplatesSelectOptions)
	const isFormValid = useSMSNotificationStore((s) => s.isFormValid)
	const changeTemplatesSelectChange = useGetChangeTemplatesSelectInput(form)
	const changeSMSTextarea = useGetChangeSMSTextarea()
	const sendSMS = useGetSendSMS(form, clientPhone)

	const getMessageTemplatesRes = messageTemplateQuery.getMessageTemplates().useQuery()

	if (getMessageTemplatesRes.isLoading) {
		return <p>Загрузка...</p>
	}

	if (getMessageTemplatesRes.error) {
		return <p>При загрузке произошла ошибка</p>
	}

	if (!orderId) {
		return <p>Не указан orderId</p>
	}

	return (
		<OrderContentContainer header='Оповещение по СМС'>
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
		</OrderContentContainer>
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
