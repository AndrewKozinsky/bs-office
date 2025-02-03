import { useCallback, useRef } from 'react'
import { useCustomerFormStore } from '../../customerFormStore/customerFormStore.ts'
// import { useNewOrderStore } from '../../newOrderStore/allPagesStore.ts'

/*export function useGetOnAddressSearchChange() {
	const isFirstRender = useRef(false)

	return useCallback(function (addressSearch: string) {
		if (!isFirstRender.current) {
			isFirstRender.current = true
			return
		}

		useNewOrderStore.setState({ addressSearch })
	}, [])
}*/

export function useCustomerNameSearchChange() {
	return useCallback(function (userNameSearch: string) {
		useCustomerFormStore.setState({ userNameSearch })
	}, [])
}

/**
 * Возвращает функцию, которая ставит в свойство brandIsSelected true
 * если выбрали какой-то пункт из списка производителей.
 * Нужно чтобы загрузился список устройств этого производителя.
 */
/*export function useGetOnDeviceBrandChanged() {
	return useCallback(function (brandId: string) {
		useNewOrderStore.setState({ selectedBrandId: brandId })
	}, [])
}*/

/*export function useGetOnDeviceModelsSearchChange() {
	return useCallback(function (deviceModelSearch: string) {
		useNewOrderStore.setState({ deviceModelSearch })
	}, [])
}*/
