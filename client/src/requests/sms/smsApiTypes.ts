import { MessageTemplate } from '../../types/user.ts'

namespace SmsApiTypes {
	export type GetMessageTemplatesRes = MessageTemplate[]

	export type SendCMCRequestBody = {
		phone_number: string
		msg_text: string
	}
}

export default SmsApiTypes
