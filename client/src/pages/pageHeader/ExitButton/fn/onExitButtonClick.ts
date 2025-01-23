import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { authFeatures } from '../../../../features/authFeatures.ts'

export function useGetOnExitButtonClick() {
	const navigate = useNavigate()

	return useCallback(
		function () {
			authFeatures.logout()

			navigate('/')
		},
		[navigate],
	)
}
