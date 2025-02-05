import { create } from 'zustand'

export type NewOrderContainersStore = {
	isUserSelected: boolean
}

export const newOrderContainersStore: NewOrderContainersStore = {
	isUserSelected: false,
}

export const useNewOrderContainersStore = create<NewOrderContainersStore>()((set) => {
	return newOrderContainersStore
})
