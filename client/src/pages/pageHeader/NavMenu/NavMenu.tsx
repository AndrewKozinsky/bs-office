import { Menu, MenuProps } from 'antd'
import React, { useState } from 'react'
import { useGetMenuItems } from './fn/getMenuItems.tsx'

function NavMenu() {
	const [current, setCurrent] = useState('mail')

	const menuItems = useGetMenuItems()

	const onClick: MenuProps['onClick'] = (e) => {
		console.log('click ', e)
		setCurrent(e.key)
	}

	return (
		<div>
			<Menu onClick={onClick} selectedKeys={[current]} mode='horizontal' items={menuItems} />
		</div>
	)
}

export default NavMenu
