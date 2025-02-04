import { useCallback } from 'react'
import { FormInstance } from 'antd'
import { callsRequests, MakeCallReqBody } from '../../../../requests/callsRequests.ts'
import { FieldNames, FieldType } from './form'

export function useGetCallToClient(form: FormInstance<FieldType>, clientPhone: string) {
	return useCallback(async function () {
		try {
			const reqBody: MakeCallReqBody = {
				to: clientPhone,
				from: form.getFieldValue(FieldNames.phone),
			}
			const response = await callsRequests.makeCall(reqBody)

			alert('Сообщение отправлено')
		} catch (error) {
			alert(`Ошибка: ${error.message}`)
		}
	}, [])
}
