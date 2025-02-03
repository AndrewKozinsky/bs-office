import { useEffect } from 'react'
import { addEmptyValueToOptions } from '../../../../../common/formUtils.ts'
import { ClientTypes, TypesOfRepair } from '../../../../../types/user.ts'
import { NewOrderStore, useNewOrderStore } from '../../../old/_newOrderStore/allPagesStore.ts'
import { CustomerFormStore, useCustomerFormStore } from '../../customerFormStore/customerFormStore.ts'

/*export const repairTypesRadiosArrData = repairTypes.map((item) => {
	return { value: item, label: item }
})*/

// export const clientTypes: ClientTypes = ['Физ. лицо', 'Юр. лицо', 'ИП', 'Гос. орган']

/*export const clientTypesRadiosArrData = clientTypes.map((item) => {
	return { value: item, label: item }
})*/

// export const howKnow = ['Гугл', 'Яндекс', '2ГИС', 'Сайт', 'Эл. почта', 'СМС', 'Вывеска', 'Рекомендация', 'Повторный']

/*export const howKnowRadiosArrData = howKnow.map((item) => {
	return { value: item, label: item }
})*/

/*export function useCreateMastersRadiosData() {
	const masters = useNewOrderStore((s) => s.masters)

	useEffect(
		function () {
			if (!masters) return

			const options: NewOrderStore['mastersSelectOptions'] = masters.map((master) => {
				return {
					label: master.user_name,
					value: master.user_id,
				}
			})

			addEmptyValueToOptions(options)

			useNewOrderStore.setState({ mastersSelectOptions: options })
		},
		[masters],
	)
}*/

/*export function useCreateAddressSuggestionsSelectOptionsData() {
	const addressSuggestions = useNewOrderStore((s) => s.addressSuggestions)

	useEffect(
		function () {
			if (!addressSuggestions) {
				useNewOrderStore.setState({ addressSuggestionsSelectOptions: null })
				return
			}

			const options: NewOrderStore['addressSuggestionsSelectOptions'] = addressSuggestions.map((addObj) => {
				const addString = addObj.full_adress

				return {
					label: addString,
					value: addString,
				}
			})

			useNewOrderStore.setState({ addressSuggestionsSelectOptions: options })
		},
		[addressSuggestions],
	)
}*/

export function useCreateCustomersSelectOptionsData() {
	const users = useCustomerFormStore((s) => s.users)

	useEffect(
		function () {
			if (!users) return

			const options: CustomerFormStore['usersSelectOptions'] = users.map((user) => {
				return {
					label: user.user_name,
					value: user.user_id,
				}
			})
			console.log(options)

			useCustomerFormStore.setState({ usersSelectOptions: options })
		},
		[users],
	)
}
