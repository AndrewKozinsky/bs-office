import { useCallback, useEffect, useRef } from 'react'
import { FormInstance } from 'antd'
import { CallToClientFormStore, useCallToClientFormStore } from '../callToClientFormStore.ts'
import { checkCallToClientForm, FieldType } from './form.ts'

export function useCreateSelectOptionsData() {
	const staffPhones = useCallToClientFormStore((s) => s.staffPhones)
	const order = useCallToClientFormStore((s) => s.order)
	const phoneSearch = useCallToClientFormStore((s) => s.phoneSearch)

	useEffect(
		function () {
			if (!staffPhones) return

			const staffPhonesWithSpecificName = staffPhones.filter((phoneData) => {
				if (!phoneSearch) return true

				return phoneData.user_name.toLowerCase().includes(phoneSearch.toLowerCase())
			})

			const options: CallToClientFormStore['phonesSelectOptions'] = staffPhonesWithSpecificName.map(
				(phoneData) => {
					return {
						label: phoneData.user_name,
						value: phoneData.user_phone,
					}
				},
			)

			useCallToClientFormStore.setState({ phonesSelectOptions: options })
		},
		[staffPhones, order, phoneSearch],
	)
}

export function useGetChangePhonesSelectInput(form: FormInstance<FieldType>) {
	return function (selectedPhoneId: string) {
		checkCallToClientForm(form)
	}
}

export function useGetOnAddressSearchChange() {
	const isFirstRender = useRef(false)

	return useCallback(function (phoneSearch: string) {
		if (!isFirstRender.current) {
			isFirstRender.current = true
			return
		}

		useCallToClientFormStore.setState({ phoneSearch })
	}, [])
}
