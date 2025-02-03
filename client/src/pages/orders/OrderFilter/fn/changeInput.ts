import React from 'react'
import { useOrdersStore } from '../../ordersStore/ordersStore.ts'

export function useGetChangeSearchInput() {
	return function (e: React.ChangeEvent<HTMLInputElement>) {
		const value = e.currentTarget.value

		useOrdersStore.setState({ universalSearchQuery: value })
	}
}

export function useGetChangeSelectInput(selectType: 'masters' | 'deviceBrands' | 'deviceTypes' | 'orderStatuses') {
	return function (selectedItemId: string) {
		if (selectType === 'masters') {
			useOrdersStore.setState({ masterId: selectedItemId })
		} else if (selectType === 'deviceBrands') {
			useOrdersStore.setState({ deviceBrandId: selectedItemId })
		} else if (selectType === 'deviceTypes') {
			useOrdersStore.setState({ deviceTypeId: selectedItemId })
		} else if (selectType === 'orderStatuses') {
			useOrdersStore.setState({ orderStatusId: selectedItemId })
		}
	}
}
