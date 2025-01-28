import { useCallback, useRef } from 'react'
import { useNewOrderStore } from '../../newOrderStore/allPagesStore.ts'

export function useGetOnAddressSearchChange() {
	const isFirstRender = useRef(false)

	return useCallback(function (addressSearch: string) {
		if (!isFirstRender.current) {
			isFirstRender.current = true
			return
		}

		useNewOrderStore.setState({ addressSearch })
	}, [])
}

export function useGetOnDeviceTypeSearchChange() {
	return useCallback(function (deviceTypeSearch: string) {
		useNewOrderStore.setState({ deviceTypeSearch })
	}, [])
}

export function useGetOnDeviceBrandsSearchChange() {
	return useCallback(function (deviceBrandSearch: string) {
		useNewOrderStore.setState({ deviceBrandSearch })
	}, [])
}

export function useGetOnDeviceModelsSearchChange() {
	return useCallback(function (deviceModelSearch: string) {
		useNewOrderStore.setState({ deviceModelSearch })
	}, [])
}
