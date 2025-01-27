import { useEffect, useRef } from 'react'
import { throttle } from '../../../../common/miscUtils.ts'
import { addressRequests } from '../../../../requests/addressRequests.ts'
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

// const throttledFetchAddresses = throttle(fetchAddresses, 500)

export function useFetchAddresses() {
	const addressSearch = useNewOrderStore((s) => s.addressSearch)
	const isFirstRender = useRef(false)

	useEffect(
		function () {
			if (!isFirstRender.current) {
				return
			}

			if (addressSearch.length <= 3) {
				return
			}

			fetchAddresses(addressSearch)
			isFirstRender.current = true
		},
		[isFirstRender.current, addressSearch],
	)
}

async function fetchAddresses(addressSearch: string) {
	try {
		const response = await addressRequests.addressSuggestions(addressSearch)
		console.log(response)

		// useNewOrderStore.setState({ addressSuggestions: response.data })
	} catch (error) {
		console.error('Error fetching staff:', error)
	}
}
