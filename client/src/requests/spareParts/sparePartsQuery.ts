import { useQuery } from '@tanstack/react-query'
import { sparePartsRequests } from './sparePartsRequests.ts'

export const sparePartsQuery = {
	getSpareParts(searchValue: string = '') {
		return {
			key: 'searchSpareParts?search=' + searchValue,
			useQuery() {
				return useQuery({
					queryKey: [this.key],
					queryFn: async () => {
						const data = await sparePartsRequests.getSpareParts(searchValue)
						return data.data
					},
					staleTime: 60000,
				})
			},
		}
	},
}
