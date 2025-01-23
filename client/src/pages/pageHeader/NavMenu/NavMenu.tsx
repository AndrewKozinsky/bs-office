import { Menu, MenuProps } from 'antd'
import React, { useState } from 'react'
import { useGetMenuItems } from './fn/getMenuItems.tsx'

function NavMenu() {
	const [current, setCurrent] = useState('mail')

	const menuItems = useGetMenuItems()

	return (
		<div>
			<Menu selectedKeys={[current]} mode='horizontal' items={menuItems} />
		</div>
	)
}

export default NavMenu
