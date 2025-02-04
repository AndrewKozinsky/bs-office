import { useCallback } from 'react'
import { FormInstance } from 'antd'
import { SendCMCRequestBody, smsRequests } from '../../../../requests/smsRequests.ts'
import { useOrderStore } from '../../orderStore/orderStore.ts'
import { FieldNames, FieldType } from './form.ts'

export function useGetSendSMS(form: FormInstance<FieldType>) {
	const order = useOrderStore((s) => s.order)

	return useCallback(
		async function () {
			if (!order || !order.retail_user || !order.retail_user.user_phone) {
				alert('Номер телефона не найден')
				return
			}

			const requestData: SendCMCRequestBody = {
				phone_number: order.retail_user.user_phone,
				msg_text: form.getFieldValue(FieldNames.message),
			}

			try {
				const response = await smsRequests.sendCMC(requestData)
				const result = response.data

				alert('Сообщение отправлено')
			} catch (error) {
				alert(`Ошибка: ${error.message}`)
			}
		},
		[order],
	)
}
