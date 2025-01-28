import { Form, FormInstance } from 'antd'
import { useEffect, useRef } from 'react'
import { throttle } from '../../../../common/miscUtils.ts'
import { addressRequests } from '../../../../requests/addressRequests.ts'
import { deviceRequests } from '../../../../requests/deviceRequests.ts'
import { staffRequests } from '../../../../requests/staffRequests.ts'
import { useNewOrderStore } from '../../newOrderStore/allPagesStore.ts'
import { FormNames } from './formSubmit.ts'

// ==== Fetch masters ===

export function useFetchMasters() {
	useEffect(() => {
		fetchMasters()
	}, [])
}

async function fetchMasters() {
	try {
		const response = await staffRequests.getStaff()

		useNewOrderStore.setState({ masters: response.data })
	} catch (error) {
		console.error('Error fetching staff:', error)
	}
}

// ==== Fetch addresses ===

const throttledFetchAddresses = throttle(fetchAddresses, 500)

export function useFetchAddresses() {
	const addressSearch = useNewOrderStore((s) => s.addressSearch)
	const isFirstRender = useRef(false)

	useEffect(
		function () {
			if (!isFirstRender.current) {
				isFirstRender.current = true
				return
			}

			if (addressSearch.length <= 3) {
				return
			}

			throttledFetchAddresses(addressSearch)
		},
		[isFirstRender.current, addressSearch],
	)
}

async function fetchAddresses(addressSearch: string) {
	try {
		// console.log(addressSearch)
		const response = await addressRequests.addressSuggestions(addressSearch)
		// console.log(response.data)

		useNewOrderStore.setState({ addressSuggestions: response.data })
	} catch (error) {
		console.error('Error fetching staff:', error)
	}
}

// ==== Fetch Device types ===

const throttledFetchDeviceTypes = throttle(fetchDeviceTypes, 500)

export function useFetchDeviceTypes() {
	useEffect(function () {
		throttledFetchDeviceTypes()
	}, [])
}

async function fetchDeviceTypes() {
	try {
		const response = await deviceRequests.getDeviceTypes()

		useNewOrderStore.setState({ deviceTypes: response.data })
	} catch (error) {
		console.error('Error fetching deviceTypes:', error)
	}
}

// ==== Fetch Device brands ===

const throttledFetchDeviceBrands = throttle(fetchDeviceBrands, 500)

export function useFetchDeviceBrands() {
	useEffect(function () {
		throttledFetchDeviceBrands()
	}, [])
}

async function fetchDeviceBrands() {
	try {
		const response = await deviceRequests.getDeviceBrands()

		useNewOrderStore.setState({ deviceBrands: response.data })
	} catch (error) {
		console.error('Error fetching deviceBrands:', error)
	}
}

// ==== Fetch Device models ===

const throttledFetchDeviceModels = throttle(fetchDeviceModels, 500)

export function useFetchDeviceModels(form: FormInstance) {
	const selectedBrandId = useNewOrderStore((s) => s.selectedBrandId)

	useEffect(
		function () {
			if (!selectedBrandId) return

			const { deviceBrands } = useNewOrderStore.getState()
			if (!deviceBrands) return

			const selectedDeviceBrand = deviceBrands.find((deviceBrand) => {
				return deviceBrand.device_brand_id === selectedBrandId
			})

			if (!selectedDeviceBrand) return

			throttledFetchDeviceModels(selectedDeviceBrand.device_brand_name)
		},
		[selectedBrandId],
	)
}

async function fetchDeviceModels(brandName: string) {
	try {
		const response = await deviceRequests.getBrandDevices(brandName.toLowerCase())

		useNewOrderStore.setState({ deviceModels: response.data })
	} catch (error) {
		console.error('Error fetching deviceModels:', error)
	}
}
