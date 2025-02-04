import { useEffect } from 'react'
import { callsRequests } from '../../../../requests/callsRequests.ts'
import { useCallToClientFormStore } from '../callToClientFormStore.ts'

export function useFetchStaffPhones() {
	useEffect(() => {
		fetchStaffPhonesData()
	}, [])
}

async function fetchStaffPhonesData() {
	try {
		useCallToClientFormStore.setState({ loading: true })

		const response = await callsRequests.getStaffPhones()
		useCallToClientFormStore.setState({ staffPhones: response.data })
	} catch (error) {
		console.log('Ошибка при загрузке телефонов сотрудников')
	} finally {
		useCallToClientFormStore.setState({ loading: false })
	}
}
