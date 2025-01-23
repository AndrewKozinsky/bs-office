import React, { useEffect } from 'react'
import { Spin } from 'antd'
import { authFeatures } from '../../features/authFeatures.ts'
import PagesContainer from '../../pages/PagesContainer.tsx'
import { useUserStore } from '../../stores/userStore.ts'
import LoginForm from '../LoginForm/LoginForm.tsx'
import './css/index.scss'

function App() {
	const user = useUserStore((s) => s.user)
	const isLoading = useUserStore((s) => s.isLoading)

	useEffect(() => {
		authFeatures.checkAuth()
	}, [])

	if (isLoading) {
		return <Spin />
	}

	if (!user) {
		return <LoginForm />
	}

	return <PagesContainer />
}

export default App
