import $api from '../../components/http'
import AddressApiTypes from './addressApiTypes.ts'

export const addressRequests = {
	/**
	 * Отправка строки вида 'Оренбург, Салмы'
	 * и получение списка адресов подходящий под поисковую строку.
	 * @param search — строки вида 'Оренбург, Салмы'
	 */
	async addressSuggestions(search: string) {
		return $api.get<AddressApiTypes.AddressSuggestionsRes>('/address-suggestions', { params: { search } })
	},
}
