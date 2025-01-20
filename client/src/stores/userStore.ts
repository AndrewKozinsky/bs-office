import { create } from 'zustand'
import { CurrentUser } from '../types/user.ts'

interface UserStore {
	isLoading: boolean
	user: null | CurrentUser
}

export const useUserStore = create<UserStore>()((set) => {
	return {
		isLoading: true,
		user: null,
	}
})
