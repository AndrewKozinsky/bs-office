import React from 'react'
import { useAllOrdersStore } from '../../allPagesStore/allPagesStore.ts'

export function useGetChangeSearchInput() {
	return function (e: React.ChangeEvent<HTMLInputElement>) {
		const value = e.currentTarget.value

		useAllOrdersStore.setState({ universalSearchQuery: value })
	}
}

export function useGetChangeSelectInput(selectType: 'masters' | 'deviceBrands' | 'deviceTypes' | 'orderStatuses') {
	return function (selectedItemId: string) {
		if (selectType === 'masters') {
			useAllOrdersStore.setState({ masterId: selectedItemId })
		} else if (selectType === 'deviceBrands') {
			useAllOrdersStore.setState({ deviceBrandId: selectedItemId })
		} else if (selectType === 'deviceTypes') {
			useAllOrdersStore.setState({ deviceTypeId: selectedItemId })
		} else if (selectType === 'orderStatuses') {
			useAllOrdersStore.setState({ orderStatusId: selectedItemId })
		}
	}
}
