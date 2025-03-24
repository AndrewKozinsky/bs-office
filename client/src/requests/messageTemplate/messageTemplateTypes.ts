import { MessageTemplate, MessageTemplateType } from '../../types/user.ts'

namespace MessageTemplateApiTypes {
	export type GetMessageTemplatesRes = MessageTemplate[]

	export type AddMessageTemplatesRes = MessageTemplate

	export type AddMessageTemplateInput = {
		template_text: string // 'Здравствуйте ваше устройство готово к выдаче'
		template_type: MessageTemplateType
	}

	export type UpdateMessageTemplateInput = {
		template_id?: string
		template_text?: string // 'Здравствуйте ваше устройство готово к выдаче'
		template_type?: MessageTemplateType
	}
}

export default MessageTemplateApiTypes
