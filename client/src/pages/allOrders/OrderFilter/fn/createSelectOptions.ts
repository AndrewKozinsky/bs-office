import { useEffect } from 'react'
import { SelectOption } from '../../../../types/commonTypes.ts'
import { AllOrdersStore, useAllOrdersStore } from '../../allPagesStore/allPagesStore.ts'

export function useCreateSelectOptionsData() {
	const masters = useAllOrdersStore((s) => s.masters)
	const deviceBrands = useAllOrdersStore((s) => s.deviceBrands)
	const deviceTypes = useAllOrdersStore((s) => s.deviceTypes)
	const orderStatuses = useAllOrdersStore((s) => s.orderStatuses)

	useEffect(
		function () {
			if (!masters) return

			const options: AllOrdersStore['mastersSelectOptions'] = masters.map((master) => {
				return {
					label: master.user_name,
					value: master.user_id,
				}
			})

			addEmptyValueToOptions(options)

			useAllOrdersStore.setState({ mastersSelectOptions: options })
		},
		[masters],
	)

	useEffect(
		function () {
			if (!deviceBrands) return

			const options: AllOrdersStore['deviceBrandsSelectOptions'] = deviceBrands.map((deviceBrand) => {
				return {
					label: deviceBrand.device_brand_name,
					value: deviceBrand.device_brand_id,
				}
			})

			addEmptyValueToOptions(options)

			useAllOrdersStore.setState({ deviceBrandsSelectOptions: options })
		},
		[deviceBrands],
	)

	useEffect(
		function () {
			if (!deviceTypes) return

			const options: AllOrdersStore['deviceTypesSelectOptions'] = deviceTypes.map((deviceType) => {
				return {
					label: deviceType.device_type_name,
					value: deviceType.device_type_id,
				}
			})

			addEmptyValueToOptions(options)

			useAllOrdersStore.setState({ deviceTypesSelectOptions: options })
		},
		[deviceTypes],
	)

	useEffect(
		function () {
			if (!orderStatuses) return

			// deviceBrandsSelectOptions
			const options: AllOrdersStore['orderStatusesSelectOptions'] = orderStatuses.map((status) => {
				return {
					label: status,
					value: status,
				}
			})

			addEmptyValueToOptions(options)

			useAllOrdersStore.setState({ orderStatusesSelectOptions: options })
		},
		[orderStatuses],
	)
}

function addEmptyValueToOptions(options: SelectOption[]) {
	options.unshift({ label: 'Не выбрано', value: '' })
}
