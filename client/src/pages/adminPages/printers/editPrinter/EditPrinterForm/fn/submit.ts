import { useCallback } from 'react'
import PrintersApiTypes from '../../../../../../requests/printers/printersApiTypes.ts'
import { printersQuery } from '../../../../../../requests/printers/printersQuery.ts'
import { printersRequests } from '../../../../../../requests/printers/printersRequests.ts'
import { useEditPrinterStore } from '../../editPrinterStore.ts'
import { FieldType, FormNames } from './form.ts'
import { Printer } from '../../../../../../types/user.ts'

export function useGetOnEditPrinterFormSubmit(printer: Printer) {
	const { refetch: getPrintersReFetch } = printersQuery.getPrinters().useQuery()

	return useCallback(async function (values: FieldType) {
		const updateEmployeeInputData: PrintersApiTypes.UpdatePrinterInput = {
			printer_id: printer.printer_id,
			printer_location: values[FormNames.location],
			printer_name: values[FormNames.name],
			printer_type: values[FormNames.type],
			printer_url: values[FormNames.url],
		}

		try {
			await printersRequests.updatePrinter(updateEmployeeInputData)

			// Получить список сотрудников заново
			getPrintersReFetch()

			// Закрыть модальное окно
			useEditPrinterStore.setState({ currentPrinterId: null })
		} catch (error: unknown) {
			console.log(error)
		}
	}, [])
}
