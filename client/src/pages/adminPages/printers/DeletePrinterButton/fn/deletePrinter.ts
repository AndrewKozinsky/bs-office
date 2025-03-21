import { useCallback } from 'react'
import { printersQuery } from '../../../../../requests/printers/printersQuery.ts'
import { printersRequests } from '../../../../../requests/printers/printersRequests.ts'
import { useDeletePrintersStore } from '../deletePrinterStore.ts'

export function useGetDeletePrinter(printerId: string) {
	const { refetch: getPrintersReFetch } = printersQuery.getPrinters().useQuery()

	return useCallback(async function () {
		try {
			await printersRequests.deletePrinter(printerId)

			// Получить список принтеров заново
			getPrintersReFetch()

			// Закрыть модальное окно
			useDeletePrintersStore.setState({ currentPrinterId: null })
		} catch (error: unknown) {
			console.log(error)
		}
	}, [])
}
