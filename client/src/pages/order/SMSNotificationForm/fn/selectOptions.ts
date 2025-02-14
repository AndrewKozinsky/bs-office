import React, { useEffect } from 'react'
import { FormInstance } from 'antd'
import { messageTemplateQuery } from '../../../../requests/messageTemplate/messageTemplateQuery.ts'
import MessageTemplateApiTypes from '../../../../requests/messageTemplate/messageTemplateTypes.ts'
import { ordersQuery } from '../../../../requests/orders/ordersQuery.ts'
import { IOrder } from '../../../../types/user.ts'
import { SMSNotificationStore, useSMSNotificationStore } from '../SMSNotificationStore.ts'
import { checkNotificationForm, FieldNames, FieldType } from './form.ts'

export function useCreateSelectOptionsData(orderId: string | number) {
	const getMessageTemplatesRes = messageTemplateQuery.getMessageTemplates().useQuery()
	const templates = getMessageTemplatesRes.data?.data

	const getOrderRes = ordersQuery.getOrder(orderId).useQuery()
	const order = getOrderRes.data?.data

	useEffect(
		function () {
			if (!templates || !order) return

			const smsTemplates = filterSMSTemplates(getMessageTemplatesRes.data.data)

			smsTemplates.forEach((template) => {
				template.template_text = replaceTemplateParameters(template.template_text, order)
			})

			const options: SMSNotificationStore['smsTemplatesSelectOptions'] = smsTemplates.map((template) => {
				switch (template.template_id) {
					case '39':
						return {
							label: 'Устройство готово к выдаче',
							value: template.template_id,
						}
					case '40':
						return {
							label: 'Заказ 00НФ-*** готов',
							value: template.template_id,
						}
					case '41':
						return {
							label: 'Не дозвонились',
							value: template.template_id,
						}
				}

				return {
					label: template.template_text,
					value: template.template_id,
				}
			})

			useSMSNotificationStore.setState({ smsTemplatesSelectOptions: options })
		},
		[templates, order],
	)
}

function replaceTemplateParameters(template: string, order: IOrder) {
	return template
		.replace(/{number}/g, order.order_id || '')
		.replace(/{status}/g, order.order_status || '')
		.replace(/{adress}/g, order.order_branch || '')
}

export function useGetChangeTemplatesSelectInput(form: FormInstance<FieldType>) {
	const getMessageTemplatesRes = messageTemplateQuery.getMessageTemplates().useQuery()

	return function (smsTemplateId: string) {
		if (!getMessageTemplatesRes.data?.data) {
			return
		}

		const smsTemplates = filterSMSTemplates(getMessageTemplatesRes.data.data)
		if (!smsTemplates) return

		const template = smsTemplates.find((template) => template.template_id === smsTemplateId)
		if (!template) return

		form.setFieldValue(FieldNames.message, template.template_text)
		checkNotificationForm(form)
	}
}

function filterSMSTemplates(templates: MessageTemplateApiTypes.GetMessageTemplatesRes) {
	return templates.filter((template) => template.template_type === 'SMS')
}

export function useGetChangeSMSTextarea() {
	return function (e: React.ChangeEvent<HTMLTextAreaElement>) {
		const { value } = e.target

		const smsCountToSendText = Math.ceil(value.length / 70)

		useSMSNotificationStore.setState({ smsCountToSendText })
	}
}
