import { useCallback } from 'react'
import { FormInstance } from 'antd'
import CallsApiTypes from '../../../../requests/calls/callsApiTypes.ts'
import { callsRequests } from '../../../../requests/calls/callsRequests.ts'
import { FieldNames, FieldType } from './form'

export function useGetCallToClient(form: FormInstance<FieldType>, clientPhone: string) {
	return useCallback(async function () {
		try {
			const reqBody: CallsApiTypes.MakeCallReqBody = {
				out_nomber: clientPhone,
				in_number: form.getFieldValue(FieldNames.phone),
			}
			const response = await callsRequests.makeCall(reqBody)
		} catch (error) {
			alert(`Ошибка: ${error.message}`)
		}
	}, [])
}
