import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import { pagesRoute } from './components/pages/pagesRoute.ts'
import WarrantyRepair from './components/pages/unsorted/WarrantyRepair.tsx'
import OrderStatus from './components/pages/unsorted/OrderStatus.tsx'
import Orders from './components/pages/unsorted/Orders.tsx'
import Employees from './components/pages/unsorted/Employees.tsx'
import ChangeOrder from './components/pages/unsorted/ChangeOrder.tsx'
import Calls from './components/pages/unsorted/Calls.tsx'
// import SearchOrder from './components/pages/SearchOrder.jsx';
import PersonalAccount from './components/pages/unsorted/PersonalAccount.tsx'
import { useUserStore } from './stores/userStore.ts'
import { UserRole } from './types/user.ts'
// import Acceptance from './components/pages/Acceptance.jsx';
// import PhoneBook from './components/pages/PhoneBook.jsx';
import Maxvi from './components/pages/unsorted/Maxvi.tsx'
// import Adminka from './components/pages/Adminka.jsx'
// import Shipment from './components/pages/Shipment.jsx';
import AllOrdersPage from './components/pages/allOrders/AllOrdersPage/AllOrdersPage.tsx'

const MainPage = () => {
	const user = useUserStore((s) => s.user)
	const userRole = user.role

	return (
		<>
			<Header />
			{/* <AppMedia /> */}
			<Routes>
				{/*<Route path='/' element={<PersonalAccount />} />*/}
				<Route
					path={pagesRoute.allOrders}
					element={
						userRole === UserRole.Admin || userRole === UserRole.Master || userRole === UserRole.Manager ? (
							<AllOrdersPage />
						) : (
							<Navigate to={pagesRoute.personalAccount} />
						)
					}
				/>
				{/*<Route
					path={pagesRoute.orderStatus}
					element={
						userRole === UserRole.Admin || userRole === UserRole.Master || userRole === UserRole.Manager ? (
							<OrderStatus />
						) : (
							<Navigate to={pagesRoute.personalAccount} />
						)
					}
				/>*/}
				{/*<Route
					path={pagesRoute.warrantyRepair}
					element={
						userRole === UserRole.Admin || userRole === UserRole.Manager || userRole === UserRole.Master ? (
							<WarrantyRepair />
						) : (
							<Navigate to={pagesRoute.personalAccount} />
						)
					}
				/>*/}
				{/*<Route
					path={pagesRoute.maxvi}
					element={
						userRole === UserRole.Admin || userRole === UserRole.Master || userRole === UserRole.Manager ? (
							<Maxvi />
						) : (
							<Navigate to={pagesRoute.personalAccount} />
						)
					}
				/>*/}
				{/*<Route
					path={pagesRoute.orders}
					element={
						userRole === UserRole.Admin || userRole === UserRole.Master || userRole === UserRole.Manager ? (
							<Orders />
						) : (
							<Navigate to={pagesRoute.personalAccount} />
						)
					}
				/>*/}
				{/*<Route
					path={pagesRoute.employees}
					element={userRole === UserRole.Admin ? <Employees /> : <Navigate to={pagesRoute.personalAccount} />}
				/>*/}
				{/*<Route
					path={pagesRoute.changeOrder}
					element={
						userRole === UserRole.Admin || userRole === UserRole.Master ? (
							<ChangeOrder />
						) : (
							<Navigate to={pagesRoute.personalAccount} />
						)
					}
				/>*/}
				{/*<Route
					path={pagesRoute.calls}
					element={
						userRole === UserRole.Admin || userRole === UserRole.Master || userRole === UserRole.Manager ? (
							<Calls />
						) : (
							<Navigate to={pagesRoute.personalAccount} />
						)
					}
				/>*/}
				{/*<Route path={pagesRoute.phoneBook} element={<PhoneBook />} />*/}
				{/*<Route path={pagesRoute.searchOrder} element={userRole === UserRole.Admin || userRole === 'ADMIN' || userRole === UserRole.Manager ? <SearchOrder /> : <Navigate to="/PersonalAccount" />} />*/}
				{/*<Route path={pagesRoute.adminka} element={userRole === UserRole.Admin ? <Adminka /> : <Navigate to="/PersonalAccount" />} />*/}
				{/*<Route path={pagesRoute.acceptance} element={userRole === 'Туркистанская' || userRole === 'Выдача' || userRole === 'Отправка' || userRole === UserRole.Admin ? <Acceptance /> : <Navigate to="/PersonalAccount" />} />*/}
				{/*<Route path={pagesRoute.shipment} element={userRole === 'Туркистанская' || userRole === 'Приёмка' || userRole === 'Отправка' || userRole === UserRole.Admin ? <Shipment /> : <Navigate to="/PersonalAccount" />} />*/}
			</Routes>
		</>
	)
}

export default MainPage
