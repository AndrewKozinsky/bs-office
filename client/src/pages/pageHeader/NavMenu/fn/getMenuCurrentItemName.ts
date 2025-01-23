import { useMemo } from 'react'
import { useLocation } from 'react-router'

export function useGetMenuCurrentItemName() {
	const location = useLocation()

	return useMemo(
		function () {
			return location.pathname
		},
		[location.pathname],
	)
}
