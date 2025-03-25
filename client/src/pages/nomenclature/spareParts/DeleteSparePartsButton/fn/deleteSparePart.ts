import { useCallback } from 'react'
import { printersQuery } from '../../../../../requests/printers/printersQuery.ts'
import { printersRequests } from '../../../../../requests/printers/printersRequests.ts'
import { useDeleteSparePartsStore } from '../deleteSparePartStore.ts'

export function useGetDeleteSparePart(sparePartId: string) {
	const { refetch: getSparePartsReFetch } = printersQuery.getPrinters().useQuery()

	return useCallback(async function () {
		try {
			await printersRequests.deletePrinter(sparePartId)

			// Получить список принтеров заново
			getSparePartsReFetch()

			// Закрыть модальное окно
			useDeleteSparePartsStore.setState({ currentSparePartId: null })
		} catch (error: unknown) {
			console.log(error)
		}
	}, [])
}
