import React, { useCallback } from 'react'
import { debounce } from '../../../../../utils/other.ts'
import { useSparePartsStore } from '../../sparePartsStore.ts'

export type FieldType = Record<FormNames, string>

export enum FormNames {
	search = 'search',
}

export function useGetOnSearchInputChange() {
	return useCallback(
		debounce((e: React.FormEvent<HTMLInputElement>) => {
			// @ts-ignore
			const { value } = e.target

			useSparePartsStore.setState({ searchValue: value })
		}, 1000),
		[],
	)
}
