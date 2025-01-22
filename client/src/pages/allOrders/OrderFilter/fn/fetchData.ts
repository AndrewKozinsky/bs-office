import { useEffect } from 'react'
import { deviceRequests } from '../../../../requests/deviceRequests.ts'
import { ordersRequests } from '../../../../requests/ordersRequests.ts'
import { staffRequests } from '../../../../requests/staffRequests.ts'
import { useAllOrdersStore } from '../../allPagesStore/allPagesStore.ts'

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

		useAllOrdersStore.setState({ masters: response.data })
	} catch (error) {
		console.error('Error fetching staff:', error)
	}
}

const fetchDeviceTypes = async () => {
	try {
		const response = await deviceRequests.getDeviceTypes()

		useAllOrdersStore.setState({ deviceTypes: response.data })
	} catch (error) {
		console.error('Error fetching device types:', error)
	}
}

const fetchDeviceBrands = async () => {
	try {
		const response = await deviceRequests.getDeviceBrands()

		useAllOrdersStore.setState({ deviceBrands: response.data })
	} catch (error) {
		console.error('Error fetching device brands:', error)
	}
}

const fetchOrderStatuses = async () => {
	try {
		const response = await ordersRequests.getStatusesNames()
		console.log(response)

		useAllOrdersStore.setState({ orderStatuses: response.data })
	} catch (error) {
		console.error('Error fetching device brands:', error)
	}
}
