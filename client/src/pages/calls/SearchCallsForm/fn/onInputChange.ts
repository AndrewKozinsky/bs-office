import React, { useCallback } from 'react'
import { useCallsStore } from '../../callsStore/callsStore.ts'

export function useGetOnSearchInputChange() {
	return useCallback((e: React.FormEvent<HTMLInputElement>) => {
		// @ts-ignore
		const { value } = e.target

		useCallsStore.setState({ searchNumberValue: value })
	}, [])
}
