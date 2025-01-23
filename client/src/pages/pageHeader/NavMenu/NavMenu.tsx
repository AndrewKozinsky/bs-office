import { Menu } from 'antd'
import React from 'react'
import { useGetMenuCurrentItemName } from './fn/getMenuCurrentItemName.ts'
import { useGetMenuItems } from './fn/getMenuItems.tsx'

function NavMenu() {
	const menuItems = useGetMenuItems()
	const currentMenuItemName = useGetMenuCurrentItemName()

	return (
		<div>
			<Menu selectedKeys={[currentMenuItemName]} mode='horizontal' items={menuItems} />
		</div>
	)
}

export default NavMenu
