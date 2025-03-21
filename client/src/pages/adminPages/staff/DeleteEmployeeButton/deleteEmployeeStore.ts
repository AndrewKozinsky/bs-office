import { create } from 'zustand'

export type DeleteEmployeeStore = {
	currentEmployeeId: null | string
	loading: boolean
}

export const deleteEmployeeStoreInitial: DeleteEmployeeStore = {
	currentEmployeeId: null,
	loading: false,
}

export const useDeleteEmployeeStore = create<DeleteEmployeeStore>()((set) => {
	return deleteEmployeeStoreInitial
})
