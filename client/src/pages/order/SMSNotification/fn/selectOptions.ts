import { useEffect } from 'react'
import { FormInstance } from 'antd'
import { Order } from '../../../../types/user.ts'
import { FieldType } from '../SMSNotification.tsx'
import { SMSNotificationStore, useSMSNotificationStore } from '../SMSNotificationStore.ts'

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

function replaceTemplateParameters(template: string, order: Order) {
	return template
		.replace(/{number}/g, order.order_id || '')
		.replace(/{status}/g, order.order_status || '')
		.replace(/{adress}/g, order.order_branch || '')
}

export function useGetChangeTemplatesSelectInput(form: FormInstance<FieldType>) {
	return function (smsTemplateId: string) {
		const { smsTemplatesSelectOptions } = useSMSNotificationStore.getState()
		if (!smsTemplatesSelectOptions) return

		const selectedOption = smsTemplatesSelectOptions.find((option) => option.value === smsTemplateId)
		if (!selectedOption) return

		form.setFieldValue('messageArea', selectedOption.label)
	}
}
