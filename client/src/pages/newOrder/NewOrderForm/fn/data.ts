import { Form, FormInstance } from 'antd'
import { useEffect } from 'react'
import { addEmptyValueToOptions } from '../../../../common/formUtils.ts'
import { ClientTypes, TypesOfRepair } from '../../../../types/user.ts'
import { NewOrderStore, useNewOrderStore } from '../../newOrderStore/allPagesStore.ts'

export const repairTypes: TypesOfRepair = [
	'Простой ремонт',
	'Сложный ремонт',
	'Авторизованный ремонт',
	'Наша гарантия',
	'Поставка товаров',
	'Проверка качества',
	'Обслуживание картриджей',
	'Хоз. работы',
]

export const repairTypesRadiosArrData = repairTypes.map((item) => {
	return { value: item, label: item }
})

export const clientTypes: ClientTypes = ['Физ. лицо', 'Юр. лицо', 'ИП', 'Гос. орган']

export const clientTypesRadiosArrData = clientTypes.map((item) => {
	return { value: item, label: item }
})

export const howKnow = ['Гугл', 'Яндекс', '2ГИС', 'Сайт', 'Эл. почта', 'СМС', 'Вывеска', 'Рекомендация', 'Повторный']

export const howKnowRadiosArrData = howKnow.map((item) => {
	return { value: item, label: item }
})

export function useCreateMastersRadiosData() {
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
}

export function useCreateAddressSuggestionsSelectOptionsData() {
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
}

export function useCreateDeviceTypesSelectOptionsData() {
	const deviceTypes = useNewOrderStore((s) => s.deviceTypes)
	const deviceTypeSearch = useNewOrderStore((s) => s.deviceTypeSearch)

	useEffect(
		function () {
			if (!deviceTypes) return

			const deviceTypesWithSpecificName = deviceTypes.filter((devTypeObj) => {
				if (!deviceTypeSearch) return true

				return devTypeObj.device_type_name.toLowerCase().includes(deviceTypeSearch.toLowerCase())
			})

			const options: NewOrderStore['deviceTypesSelectOptions'] = deviceTypesWithSpecificName.map((devTypeObj) => {
				return {
					label: devTypeObj.device_type_name,
					value: devTypeObj.device_type_id,
				}
			})

			useNewOrderStore.setState({ deviceTypesSelectOptions: options })
		},
		[deviceTypes, deviceTypeSearch],
	)
}

export function useCreateDeviceBrandsSelectOptionsData() {
	const deviceBrands = useNewOrderStore((s) => s.deviceBrands)
	const deviceBrandSearch = useNewOrderStore((s) => s.deviceBrandSearch)

	useEffect(
		function () {
			if (!deviceBrands) return

			const deviceBrandsWithSpecificName = deviceBrands.filter((devBrandObj) => {
				if (!deviceBrandSearch) return true

				return devBrandObj.device_brand_name.toLowerCase().includes(deviceBrandSearch.toLowerCase())
			})

			const options: NewOrderStore['deviceTypesSelectOptions'] = deviceBrandsWithSpecificName.map(
				(devTypeObj) => {
					return {
						label: devTypeObj.device_brand_name,
						value: devTypeObj.device_brand_id,
					}
				},
			)

			useNewOrderStore.setState({ deviceBrandsSelectOptions: options })
		},
		[deviceBrands, deviceBrandSearch],
	)
}

export function useCreateDeviceModelsSelectOptionsData() {
	const deviceModels = useNewOrderStore((s) => s.deviceModels)
	const deviceModelSearch = useNewOrderStore((s) => s.deviceModelSearch)

	useEffect(
		function () {
			if (!deviceModels) return

			const deviceModelsWithSpecificName = deviceModels.filter((devBrandObj) => {
				if (!deviceModelSearch) return true

				return devBrandObj.device_model_name.toLowerCase().includes(deviceModelSearch.toLowerCase())
			})

			const options: NewOrderStore['deviceModelsSelectOptions'] = deviceModelsWithSpecificName.map(
				(devTypeObj) => {
					return {
						label: devTypeObj.device_model_name,
						value: devTypeObj.device_model_id,
					}
				},
			)

			useNewOrderStore.setState({ deviceModelsSelectOptions: options })
		},
		[deviceModels, deviceModelSearch],
	)
}
