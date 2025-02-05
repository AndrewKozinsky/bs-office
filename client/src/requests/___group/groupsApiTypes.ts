import EntityTypes from '../../types/EntityTypes'

namespace GroupsApiTypes {
	export type CreateOrEditTariffs = EntityTypes.Tariff[]

	export type GetTariffs = EntityTypes.Tariff[]

	export type RemoveUserFromGroupDto = {
		groupId: number
		userId: number
	}
}

export default GroupsApiTypes
