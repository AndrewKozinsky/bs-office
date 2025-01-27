import { useNewOrderStore } from '../../newOrderStore/allPagesStore.ts'

export function onAddressSearchChange(addressSearch: string) {
	useNewOrderStore.setState({ addressSearch })
}
