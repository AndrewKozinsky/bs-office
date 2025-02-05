import { useEffect } from 'react'
import { deviceRequests } from '../../../../requests/device/deviceRequests.ts'
import { ordersRequests } from '../../../../requests/orders/ordersRequests.ts'
import { staffRequests } from '../../../../requests/staff/staffRequests.ts'
import { useOrdersStore } from '../../ordersStore/ordersStore.ts'

export function useFetchData() {
	useEffect(() => {
		fetchStaff()
		fetchDeviceTypes()
		fetchDeviceBrands()
		fetchOrderStatuses()
	}, [])
}

const fetchStaff = async () => {
	try {
		const response = await staffRequests.getStaff()

		useOrdersStore.setState({ masters: response.data })
	} catch (error) {
		console.error('Error fetching staff:', error)
	}
}

const fetchDeviceTypes = async () => {
	try {
		const response = await deviceRequests.getDeviceTypes()

		useOrdersStore.setState({ deviceTypes: response.data })
	} catch (error) {
		console.error('Error fetching device types:', error)
	}
}

const fetchDeviceBrands = async () => {
	try {
		const response = await deviceRequests.getDeviceBrands()

		useOrdersStore.setState({ deviceBrands: response.data })
	} catch (error) {
		console.error('Error fetching device brands:', error)
	}
}

const fetchOrderStatuses = async () => {
	try {
		const response = await ordersRequests.getStatusesNames()

		useOrdersStore.setState({ orderStatuses: response.data })
	} catch (error) {
		console.error('Error fetching device brands:', error)
	}
}
