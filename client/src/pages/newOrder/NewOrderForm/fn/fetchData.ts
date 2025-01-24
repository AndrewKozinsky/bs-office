import { useEffect } from 'react'
import { staffRequests } from '../../../../requests/staffRequests.ts'
import { useNewOrderStore } from '../../newOrderStore/allPagesStore.ts'

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
