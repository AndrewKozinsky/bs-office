import { useCallback } from 'react'
import PrintersApiTypes from '../../../../../../requests/printers/printersApiTypes.ts'
import { printersQuery } from '../../../../../../requests/printers/printersQuery.ts'
import { printersRequests } from '../../../../../../requests/printers/printersRequests.ts'
import { useAddPrinterStore } from '../../addPrinterStore.ts'
import { FieldType, FormNames } from './form.ts'

export function useGetOnAddPrinterFormSubmit() {
	const { refetch: getPrintersReFetch } = printersQuery.getPrinters().useQuery()

	return useCallback(async function (values: FieldType) {
		const updatePrinterInputData: PrintersApiTypes.AddPrinterInput = {
			printer_location: values[FormNames.location],
			printer_name: values[FormNames.name],
			printer_type: values[FormNames.type],
			printer_url: values[FormNames.url],
		}

		try {
			await printersRequests.addPrinter(updatePrinterInputData)

			// Получить список принтеров заново
			getPrintersReFetch()

			// Закрыть модальное окно
			useAddPrinterStore.setState({ isVisible: false })
		} catch (error: unknown) {
			console.log(error)
		}
	}, [])
}
