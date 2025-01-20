import React, { useEffect } from 'react'
import { Spin } from 'antd'
import { authFeatures } from '../../features/authFeatures.ts'
import MainPage from '../../MainPage.tsx'
import { useUserStore } from '../../stores/userStore.ts'
import LoginForm from '../LoginForm/LoginForm.tsx'
import './css/index.css'

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

	return (
		<div>
			<MainPage />
		</div>
	)
}

export default App
