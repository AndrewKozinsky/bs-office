import { ConfigProvider } from 'antd'
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import CallsPage from '../calls/CallsPage/CallsPage.tsx'
import NewOrderPage from '../newOrder/containers/NewOrderPage/NewOrderPage.tsx'
import OrderPage from '../order/OrderPage/OrderPage.tsx'
import PageHead from '../pageHeader/PageHead/PageHead.tsx'
import { pagesRoute } from '../pagesRoute.ts'
import WarrantyRepair from '../unsorted/WarrantyRepair.tsx'
import OrderStatusOld from '../unsorted/OrderStatusOld.tsx'
import Orders from '../unsorted/Orders.tsx'
import Employees from '../unsorted/Employees.tsx'
import ChangeOrder from '../unsorted/ChangeOrder.tsx'
// import SearchOrder from './components/pages/SearchOrder.jsx';
import PersonalAccount from '../unsorted/PersonalAccount.tsx'
import { useUserStore } from '../../stores/userStore.ts'
import { UserRole } from '../../types/user.ts'
// import Acceptance from './components/pages/Acceptance.jsx';
// import PhoneBook from './components/pages/PhoneBook.jsx';
import Maxvi from '../unsorted/Maxvi.tsx'
// import Adminka from './components/pages/Adminka.jsx'
// import Shipment from './components/pages/Shipment.jsx';
import ruRU from 'antd/es/locale/ru_RU' // Uses Monday as the first day
import 'dayjs/locale/ru'
import AllOrdersPage from '../orders/OrdersPage/AllOrdersPage.tsx'
import PageContainerContext from '../pageContainer/PageContainerContext/PageContainerContext.tsx'

function PagesContainer() {
	const user = useUserStore((s) => s.user)
	const userRole = user.role

	return (
		<ConfigProvider locale={ruRU}>
			<PageContainerContext>
				<PageHead />
				{/* <AppMedia /> */}
				<Routes>
					{/*<Route path='/' element={<PersonalAccount />} />*/}
					<Route
						path={pagesRoute.orders.path}
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
					{/*<Route
						path={pagesRoute.warrantyRepair.path}
						element={
							userRole === UserRole.Admin ||
							userRole === UserRole.Manager ||
							userRole === UserRole.Master ? (
								<WarrantyRepair />
							) : (
								<Navigate to={pagesRoute.personalAccount.path} />
							)
						}
					/>*/}
					{/*<Route
					path={pagesRoute.maxvi}
					element={
						userRole === UserRole.Admin || userRole === UserRole.Master || userRole === UserRole.Manager ? (
							<Maxvi />
						) : (
							<Navigate to={pagesRoute.personalAccount.path} />
						)
					}
				/>*/}
					{/*<Route
					path={pagesRoute.orders}
					element={
						userRole === UserRole.Admin || userRole === UserRole.Master || userRole === UserRole.Manager ? (
							<Orders />
						) : (
							<Navigate to={pagesRoute.personalAccount.path} />
						)
					}
				/>*/}
					{/*<Route
					path={pagesRoute.employees}
					element={userRole === UserRole.Admin ? <Employees /> : <Navigate to={pagesRoute.personalAccount.path} />}
				/>*/}
					{/*<Route
					path={pagesRoute.changeOrder}
					element={
						userRole === UserRole.Admin || userRole === UserRole.Master ? (
							<ChangeOrder />
						) : (
							<Navigate to={pagesRoute.personalAccount.path} />
						)
					}
				/>*/}
					{/*<Route path={pagesRoute.phoneBook} element={<PhoneBook />} />*/}
					{/*<Route path={pagesRoute.searchOrder} element={userRole === UserRole.Admin || userRole === 'ADMIN' || userRole === UserRole.Manager ? <SearchOrder /> : <Navigate to="/PersonalAccount" />} />*/}
					{/*<Route path={pagesRoute.adminka} element={userRole === UserRole.Admin ? <Adminka /> : <Navigate to="/PersonalAccount" />} />*/}
					{/*<Route path={pagesRoute.acceptance} element={userRole === 'Туркистанская' || userRole === 'Выдача' || userRole === 'Отправка' || userRole === UserRole.Admin ? <Acceptance /> : <Navigate to="/PersonalAccount" />} />*/}
					{/*<Route path={pagesRoute.shipment} element={userRole === 'Туркистанская' || userRole === 'Приёмка' || userRole === 'Отправка' || userRole === UserRole.Admin ? <Shipment /> : <Navigate to="/PersonalAccount" />} />*/}
				</Routes>
			</PageContainerContext>
		</ConfigProvider>
	)
}

export default PagesContainer
