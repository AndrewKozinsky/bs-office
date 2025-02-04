import { useEffect } from 'react'
import { FormInstance } from 'antd'
import { CallToClientFormStore, useCallToClientFormStore } from '../callToClientFormStore.ts'
import { checkCallToClientForm, FieldType } from './form.ts'

export function useCreateSelectOptionsData() {
	const staffPhones = useCallToClientFormStore((s) => s.staffPhones)
	const order = useCallToClientFormStore((s) => s.order)

	useEffect(
		function () {
			if (!staffPhones) return

			const options: CallToClientFormStore['phonesSelectOptions'] = staffPhones.map((phoneData) => {
				return {
					label: phoneData.user_name,
					value: phoneData.user_phone,
				}
			})

			useCallToClientFormStore.setState({ phonesSelectOptions: options })
		},
		[staffPhones, order],
	)
}

export function useGetChangePhonesSelectInput(form: FormInstance<FieldType>) {
	return function (selectedPhoneId: string) {
		checkCallToClientForm(form)
	}
}
