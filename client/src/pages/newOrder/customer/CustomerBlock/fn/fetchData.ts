import { useEffect } from 'react'
import { throttle } from '../../../../../common/miscUtils.ts'
import { usersRequests } from '../../../../../requests/users/usersRequests.ts'
import { useCustomerFormStore } from '../../customerFormStore/customerFormStore.ts'

const throttledFetchDeviceTypes = throttle(fetchDeviceTypes, 500)

export function useFetchCustomers() {
	const userNameSearch = useCustomerFormStore((s) => s.userNameSearch)

	useEffect(
		function () {
			if (userNameSearch.length <= 3) return

			throttledFetchDeviceTypes(userNameSearch)
		},
		[userNameSearch],
	)
}

async function fetchDeviceTypes(userNameSearch: string) {
	try {
		const response = await usersRequests.getUsersByName(userNameSearch)

		useCustomerFormStore.setState({ users: response.data })
	} catch (error) {
		console.error('Error fetching deviceTypes:', error)
	}
}
