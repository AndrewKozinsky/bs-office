import { MenuProps } from 'antd'
import React, { useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import { useUserStore } from '../../../../stores/userStore.ts'
import { UserRole } from '../../../../types/user.ts'
import { pagesRoute } from '../../../pagesRoute.ts'

type MenuItem = Required<MenuProps>['items'][number]

export function useGetMenuItems() {
	const user = useUserStore((s) => s.user)

	return useMemo(
		function () {
			if (!user) return
			const { role } = user

			const items: MenuItem[] = [
				{
					label: 'Заказы',
					key: 'orders',

					children: [
						{
							label: <NavLink to={pagesRoute.orders.path()}>{pagesRoute.orders.name}</NavLink>,
							key: pagesRoute.orders.path(),
						},
						{
							label: (
								<NavLink to={pagesRoute.warrantyRepair.path}>{pagesRoute.warrantyRepair.name}</NavLink>
							),
							key: pagesRoute.warrantyRepair.path,
						},
						{
							label: <NavLink to={pagesRoute.maxvi.path}>{pagesRoute.maxvi.name}</NavLink>,
							key: pagesRoute.maxvi.path,
						},
					],
				},
			]

			if (role === UserRole.Manager || role === UserRole.Admin) {
				// @ts-ignore
				items[0].children.unshift({
					label: <NavLink to={pagesRoute.newOrder.path}>{pagesRoute.newOrder.name}</NavLink>,
					key: pagesRoute.newOrder,
				})
			}

			if (role === UserRole.Admin || role === UserRole.Manager) {
				items.push({
					label: <NavLink to={pagesRoute.calls.path}>{pagesRoute.calls.name}</NavLink>,
					key: pagesRoute.calls.path,
				})
			}

			if (role === UserRole.Admin) {
				items.push({
					label: <NavLink to={pagesRoute.adminka.path}>{pagesRoute.adminka.name}</NavLink>,
					key: pagesRoute.adminka.path,
				})
			}

			items.push({
				label: <NavLink to={pagesRoute.phoneBook.path}>{pagesRoute.phoneBook.name}</NavLink>,
				key: pagesRoute.phoneBook.path,
			})

			if (
				role === UserRole.Acceptance ||
				role === UserRole.Sending ||
				role === UserRole.Issuance ||
				role === UserRole.Admin
			) {
				items.push({
					label: <NavLink to={pagesRoute.acceptance.path}>{pagesRoute.acceptance.name}</NavLink>,
					key: pagesRoute.acceptance.path,
				})
			}

			if (
				role === UserRole.Issuance ||
				role === UserRole.Acceptance ||
				role === UserRole.Sending ||
				role === UserRole.Admin
			) {
				items.push({
					label: <NavLink to={pagesRoute.shipment.path}>{pagesRoute.shipment.name}</NavLink>,
					key: pagesRoute.shipment.path,
				})
			}

			return items
		},
		[user],
	)
}
