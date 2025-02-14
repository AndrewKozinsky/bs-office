import { useQuery } from '@tanstack/react-query'
import { messageTemplateRequests } from './messageTemplateRequests.ts'

export const messageTemplateQuery = {
	getMessageTemplates() {
		return {
			key: 'getMessageTemplates',
			useQuery() {
				return useQuery({
					queryKey: [this.key],
					queryFn: async () => {
						return await messageTemplateRequests.getMessageTemplates()
					},
					staleTime: 60000000,
				})
			},
		}
	},
}
