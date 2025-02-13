import { FormInstance } from 'antd'
import React, { useCallback, useEffect } from 'react'
import { useCallsStore } from '../../callsStore/callsStore.ts'

export type FieldType = Record<FormNames, string>

export enum FormNames {
	search = 'search',
}

export function useGetOnSearchInputChange(form: FormInstance) {
	return useCallback((e: React.FormEvent<HTMLInputElement>) => {
		// @ts-ignore
		const { value } = e.target

		useCallsStore.setState({ searchValue: value })
	}, [])
}

export function useSetValueToInput(form: FormInstance, value: string) {
	useEffect(() => {
		form.setFieldsValue({ [FormNames.search]: value })
	}, [value, form])
}
