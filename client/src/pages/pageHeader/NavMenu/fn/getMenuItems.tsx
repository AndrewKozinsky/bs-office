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
							label: <NavLink to={pagesRoute.allOrders}>Все заказы</NavLink>,
							key: pagesRoute.allOrders,
						},
						{
							label: <NavLink to={pagesRoute.warrantyRepair}>Гарантия</NavLink>,
							key: pagesRoute.warrantyRepair,
						},
						{
							label: <NavLink to={pagesRoute.maxvi}>Гарантия Maxvi</NavLink>,
							key: pagesRoute.maxvi,
						},
					],
				},
			]

			if (role === UserRole.Manager || role === UserRole.Admin) {
				// @ts-ignore
				items[0].children.unshift({
					label: <NavLink to={pagesRoute.orderStatus}>Новый Заказ</NavLink>,
					key: pagesRoute.orderStatus,
				})
			}

			if (role === UserRole.Admin || role === UserRole.Manager) {
				items.push({
					label: <NavLink to={pagesRoute.calls}>Звонки</NavLink>,
					key: pagesRoute.calls,
				})
			}

			if (role === UserRole.Admin) {
				items.push({
					label: <NavLink to={pagesRoute.adminka}>Админка</NavLink>,
					key: pagesRoute.adminka,
				})
			}

			items.push({
				label: <NavLink to={pagesRoute.phoneBook}>Телефонный справочник</NavLink>,
				key: pagesRoute.phoneBook,
			})

			if (
				role === UserRole.Acceptance ||
				role === UserRole.Sending ||
				role === UserRole.Issuance ||
				role === UserRole.Admin
			) {
				items.push({
					label: <NavLink to={pagesRoute.acceptance}>Выдача</NavLink>,
					key: pagesRoute.acceptance,
				})
			}

			if (
				role === UserRole.Issuance ||
				role === UserRole.Acceptance ||
				role === UserRole.Sending ||
				role === UserRole.Admin
			) {
				items.push({
					label: <NavLink to={pagesRoute.shipment}>Отправка</NavLink>,
					key: pagesRoute.shipment,
				})
			}

			return items
		},
		[user],
	)
}
