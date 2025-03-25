import { useCallback } from 'react'
import PrintersApiTypes from '../../../../../../requests/printers/printersApiTypes.ts'
import { printersQuery } from '../../../../../../requests/printers/printersQuery.ts'
import { printersRequests } from '../../../../../../requests/printers/printersRequests.ts'
import { useEditSparePartStore } from '../../editSparePartStore.ts'
import { FieldType, FormNames } from './form.ts'
import { Printer, SparePart } from '../../../../../../types/user.ts'

export function useGetOnEditSparePartFormSubmit(printer: SparePart) {
	const { refetch: getSparePartsReFetch } = printersQuery.getPrinters().useQuery()

	return useCallback(async function (values: FieldType) {
		const updateEmployeeInputData: PrintersApiTypes.UpdatePrinterInput = {
			printer_id: printer.id_parts,
			printer_location: values[FormNames.location],
			printer_name: values[FormNames.name],
			printer_type: values[FormNames.type],
			printer_url: values[FormNames.url],
		}

		try {
			await printersRequests.updatePrinter(updateEmployeeInputData)

			// Получить список сотрудников заново
			getSparePartsReFetch()

			// Закрыть модальное окно
			useEditSparePartStore.setState({ currentSparePartId: null })
		} catch (error: unknown) {
			console.log(error)
		}
	}, [])
}
