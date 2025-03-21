import { useQuery } from '@tanstack/react-query'
import { staffRequests } from './staffRequests.ts'

export const staffQuery = {
	getStaff() {
		return {
			key: 'getStaff',
			useQuery() {
				return useQuery({
					queryKey: [this.key],
					queryFn: async () => {
						const data = await staffRequests.getStaff()
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
