import React from 'react'
import { ConfigProvider } from 'antd'
import { Routes, Route, Navigate } from 'react-router-dom'
import MessageTemplatesPage from '../adminPages/messageTemplates/MessageTemplatesPage/MessageTemplatesPage.tsx'
import PrintersPage from '../adminPages/printers/PrintersPage/PrintersPage.tsx'
import CallsPage from '../calls/CallsPage/CallsPage.tsx'
import NewOrderPage from '../newOrder/containers/NewOrderPage/NewOrderPage.tsx'
import OrderPage from '../order/OrderPage/OrderPage.tsx'
import PageHead from '../pageHeader/PageHead/PageHead.tsx'
import { pagesRoute } from '../pagesRoute.ts'
import { useUserStore } from '../../stores/userStore.ts'
import { UserRole } from '../../types/user.ts'
import ruRU from 'antd/es/locale/ru_RU' // Uses Monday as the first day
import 'dayjs/locale/ru'
import AllOrdersPage from '../orders/OrdersPage/AllOrdersPage.tsx'
import PageContainerContext from '../pageContainer/PageContainerContext/PageContainerContext.tsx'
import StaffPage from '../adminPages/staff/StaffPage/StaffPage.tsx'

function PagesContainer() {
	const user = useUserStore((s) => s.user)
	const userRole = user.role

	return (
		<ConfigProvider locale={ruRU}>
			<PageContainerContext>
				<PageHead />
				<Routes>
					<Route
						path={pagesRoute.orders.path()}
						element={
							userRole === UserRole.Admin ||
							userRole === UserRole.Master ||
							userRole === UserRole.Manager ? (
									<AllOrdersPage />
								) : (
									<Navigate to={pagesRoute.personalAccount.path} />
								)
						}
					/>
					<Route
						path={pagesRoute.order(':orderId').path}
						element={
							userRole === UserRole.Admin ||
							userRole === UserRole.Master ||
							userRole === UserRole.Manager ? (
									<OrderPage />
								) : (
									<Navigate to={pagesRoute.personalAccount.path} />
								)
						}
					/>
					<Route
						path={pagesRoute.newOrder.path}
						element={
							userRole === UserRole.Admin ||
							userRole === UserRole.Master ||
							userRole === UserRole.Manager ? (
									<NewOrderPage />
							) : (
									<Navigate to={pagesRoute.personalAccount.path} />
								)
						}
					/>
					<Route
						path={pagesRoute.calls.path}
						element={
							userRole === UserRole.Admin ||
							userRole === UserRole.Master ||
							userRole === UserRole.Manager ? (
									<CallsPage />
								) : (
									<Navigate to={pagesRoute.personalAccount.path} />
								)
						}
					/>
					<Route
						path={pagesRoute.adminka.staff.path}
						element={
							userRole === UserRole.Admin ? (
								<StaffPage />
							) : (
								<Navigate to={pagesRoute.personalAccount.path} />
							)
						}
					/>
					<Route
						path={pagesRoute.adminka.printers.path}
						element={
							userRole === UserRole.Admin ? (
								<PrintersPage />
							) : (
								<Navigate to={pagesRoute.personalAccount.path} />
							)
						}
					/>
					<Route
						path={pagesRoute.adminka.messageTemplates.path}
						element={
							userRole === UserRole.Admin ? (
								<MessageTemplatesPage />
							) : (
								<Navigate to={pagesRoute.personalAccount.path} />
							)
						}
					/>
				</Routes>
			</PageContainerContext>
		</ConfigProvider>
	)
}

export default PagesContainer
