import { useCallback } from 'react'
import PrintersApiTypes from '../../../../../../requests/printers/printersApiTypes.ts'
import { printersQuery } from '../../../../../../requests/printers/printersQuery.ts'
import { printersRequests } from '../../../../../../requests/printers/printersRequests.ts'
import SparePartsApiTypes from '../../../../../../requests/spareParts/sparePartsApiTypes.ts'
import { sparePartsQuery } from '../../../../../../requests/spareParts/sparePartsQuery.ts'
import { sparePartsRequests } from '../../../../../../requests/spareParts/sparePartsRequests.ts'
import { useSparePartsStore } from '../../../sparePartsStore.ts'
import { useAddSparePartStore } from '../../addSparePartStore.ts'
import { FieldType, FormNames } from './form.ts'

export function useGetOnAddSparePartFormSubmit() {
	const searchValue = useSparePartsStore((s) => s.searchValue)

	const { refetch: getSparePartsReFetch } = sparePartsQuery.getSpareParts(searchValue).useQuery()

	return useCallback(async function (values: FieldType) {
		const updateSparePartInputData: SparePartsApiTypes.AddSparePartInput = {
			name_parts: values[FormNames.name],
		}

		try {
			await sparePartsRequests.addSparePart(updateSparePartInputData)

			// Получить список запчастей заново
			getSparePartsReFetch()

			// Закрыть модальное окно
			useAddSparePartStore.setState({ isVisible: false })
		} catch (error: unknown) {
			console.log(error)
		}
	}, [])
}
