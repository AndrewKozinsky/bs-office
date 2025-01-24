import React from 'react'
import Logo from '../../../common/components/Logo/Logo.tsx'
import { useUserStore } from '../../../stores/userStore.ts'
import ExitButton from '../ExitButton/ExitButton.tsx'
import NavMenu from '../NavMenu/NavMenu.tsx'
import { NavLink } from 'react-router-dom'
import './PageHead.scss'

function PageHead() {
	const user = useUserStore((s) => s.user)

	if (!user) return null

	return (
		<div className='page-head'>
			<NavLink to='/'>
				<Logo />
			</NavLink>
			<NavMenu />
			<ExitButton />
		</div>
	)
}

export default PageHead
