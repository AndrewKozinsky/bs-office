import React, { useEffect } from 'react'
import { FormInstance } from 'antd'
import { IOrder } from '../../../../types/user.ts'
import { SMSNotificationStore, useSMSNotificationStore } from '../SMSNotificationStore.ts'
import { checkNotificationForm, FieldNames, FieldType } from './form.ts'

export function useCreateSelectOptionsData() {
	const smsTemplates = useSMSNotificationStore((s) => s.smsTemplates)
	const order = useSMSNotificationStore((s) => s.order)

	useEffect(
		function () {
			if (!smsTemplates || !order) return

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
		[smsTemplates, order],
	)
}

function replaceTemplateParameters(template: string, order: IOrder) {
	return template
		.replace(/{number}/g, order.order_id || '')
		.replace(/{status}/g, order.order_status || '')
		.replace(/{adress}/g, order.order_branch || '')
}

export function useGetChangeTemplatesSelectInput(form: FormInstance<FieldType>) {
	return function (smsTemplateId: string) {
		const { smsTemplates } = useSMSNotificationStore.getState()
		if (!smsTemplates) return

		const template = smsTemplates.find((template) => template.template_id === smsTemplateId)
		if (!template) return

		form.setFieldValue(FieldNames.message, template.template_text)
		checkNotificationForm(form)
	}
}

export function useGetChangeSMSTextarea() {
	return function (e: React.ChangeEvent<HTMLTextAreaElement>) {
		const { value } = e.target

		const smsCountToSendText = Math.ceil(value.length / 70)

		useSMSNotificationStore.setState({ smsCountToSendText })
	}
}
