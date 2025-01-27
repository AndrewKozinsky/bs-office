import $api from '../components/http'
import { Address, CurrentUser } from '../types/user.ts'

export type AddressSuggestionsRes = Address[]

export const addressRequests = {
	/**
	 * Отправка строки вида 'Оренбург, Салмы'
	 * и получение списка адресов подходящий под поисковую строку.
	 * @param search — строки вида 'Оренбург, Салмы'
	 */
	async addressSuggestions(search: string) {
		return $api.get<AddressSuggestionsRes>('/address-suggestions', { params: { search } })
	},
}
