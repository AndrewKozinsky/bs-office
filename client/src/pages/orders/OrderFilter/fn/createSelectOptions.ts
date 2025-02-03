import { useEffect } from 'react'
import { addEmptyValueToOptions } from '../../../../common/formUtils.ts'
import { OrdersStore, useOrdersStore } from '../../ordersStore/ordersStore.ts'

export function useCreateSelectOptionsData() {
	const masters = useOrdersStore((s) => s.masters)
	const deviceBrands = useOrdersStore((s) => s.deviceBrands)
	const deviceTypes = useOrdersStore((s) => s.deviceTypes)
	const orderStatuses = useOrdersStore((s) => s.orderStatuses)

	useEffect(
		function () {
			if (!masters) return

			const options: OrdersStore['mastersSelectOptions'] = masters.map((master) => {
				return {
					label: master.user_name,
					value: master.user_id,
				}
			})

			addEmptyValueToOptions(options)

			useOrdersStore.setState({ mastersSelectOptions: options })
		},
		[masters],
	)

	useEffect(
		function () {
			if (!deviceBrands) return

			const options: OrdersStore['deviceBrandsSelectOptions'] = deviceBrands.map((deviceBrand) => {
				return {
					label: deviceBrand.device_brand_name,
					value: deviceBrand.device_brand_id,
				}
			})

			addEmptyValueToOptions(options)

			useOrdersStore.setState({ deviceBrandsSelectOptions: options })
		},
		[deviceBrands],
	)

	useEffect(
		function () {
			if (!deviceTypes) return

			const options: OrdersStore['deviceTypesSelectOptions'] = deviceTypes.map((deviceType) => {
				return {
					label: deviceType.device_type_name,
					value: deviceType.device_type_id,
				}
			})

			addEmptyValueToOptions(options)

			useOrdersStore.setState({ deviceTypesSelectOptions: options })
		},
		[deviceTypes],
	)

	useEffect(
		function () {
			if (!orderStatuses) return

			const options: OrdersStore['orderStatusesSelectOptions'] = orderStatuses.map((status) => {
				return {
					label: status,
					value: status,
				}
			})

			addEmptyValueToOptions(options)

			useOrdersStore.setState({ orderStatusesSelectOptions: options })
		},
		[orderStatuses],
	)
}
