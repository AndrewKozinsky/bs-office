import { useQuery } from '@tanstack/react-query'
import { printersRequests } from './printersRequests.ts'

export const printersQuery = {
	getPrinters() {
		return {
			key: 'getPrinters',
			useQuery() {
				return useQuery({
					queryKey: [this.key],
					queryFn: async () => {
						const data = await printersRequests.getPrinters()
						return data.data
					},
					staleTime: 60000,
				})
			},
		}
	},
	/*updateEmployee: {
		useMutation(options: MutationOptions = {}) {
			return useMutation(staffRequests.updateEmployee, options)
		},
	},*/
}
