import { useCallback, useEffect, useRef } from 'react'
import { FormInstance } from 'antd'
import { callsQuery } from '../../../../requests/calls/callsQuery.ts'
import { CallToClientFormStore, useCallToClientFormStore } from '../callToClientFormStore.ts'
import { checkCallToClientForm, FieldType } from './form.ts'

export function useCreateSelectOptionsData() {
	const getStaffPhonesRes = callsQuery.getStaffPhones().useQuery()
	const staffPhones = getStaffPhonesRes.data
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
		[staffPhones, phoneSearch],
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
