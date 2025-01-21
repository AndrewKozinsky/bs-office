import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import WarrantyRepair from './components/pages/WarrantyRepair'
import OrderStatus from './components/pages/OrderStatus'
import Orders from './components/pages/Orders'
import Employees from './components/pages/Employees'
import ChangeOrder from './components/pages/ChangeOrder'
import Calls from './components/pages/Calls.jsx'
// import SearchOrder from './components/pages/SearchOrder.jsx';
import PersonalAccount from './components/pages/PersonalAccount'
import { useUserStore } from './stores/userStore.ts'
import { UserRole } from './types/user.ts'
// import Acceptance from './components/pages/Acceptance.jsx';
// import PhoneBook from './components/pages/PhoneBook.jsx';
import Maxvi from './components/pages/Maxvi'
// import Adminka from './components/pages/Adminka.jsx'
// import Shipment from './components/pages/Shipment.jsx';
import AllOrders from './components/pages/AllOrders'

const MainPage = () => {
	const user = useUserStore((s) => s.user)
	const userRole = user.role

	return (
		<>
			<Header />
			{/* <AppMedia /> */}
			<Routes>
				<Route path='/' element={<PersonalAccount />} />
				<Route
					path='/AllOrders'
					element={
						userRole === UserRole.Admin || userRole === UserRole.Master || userRole === UserRole.Manager ? (
							<AllOrders />
						) : (
							<Navigate to='/PersonalAccount' />
						)
					}
				/>
				<Route
					path='/OrderStatus'
					element={
						userRole === UserRole.Admin || userRole === UserRole.Master || userRole === UserRole.Manager ? (
							<OrderStatus />
						) : (
							<Navigate to='/PersonalAccount' />
						)
					}
				/>
				<Route
					path='/WarrantyRepair'
					element={
						userRole === UserRole.Admin || userRole === UserRole.Manager || userRole === UserRole.Master ? (
							<WarrantyRepair />
						) : (
							<Navigate to='/PersonalAccount' />
						)
					}
				/>
				<Route
					path='/Maxvi'
					element={
						userRole === UserRole.Admin || userRole === UserRole.Master || userRole === UserRole.Manager ? (
							<Maxvi />
						) : (
							<Navigate to='/PersonalAccount' />
						)
					}
				/>
				<Route
					path='/Orders'
					element={
						userRole === UserRole.Admin || userRole === UserRole.Master || userRole === UserRole.Manager ? (
							<Orders />
						) : (
							<Navigate to='/PersonalAccount' />
						)
					}
				/>
				<Route
					path='/Employees'
					element={userRole === UserRole.Admin ? <Employees /> : <Navigate to='/PersonalAccount' />}
				/>
				<Route
					path='/ChangeOrder'
					element={
						userRole === UserRole.Admin || userRole === UserRole.Master ? (
							<ChangeOrder />
						) : (
							<Navigate to='/PersonalAccount' />
						)
					}
				/>
				<Route
					path='/Calls'
					element={
						userRole === UserRole.Admin || userRole === UserRole.Master || userRole === UserRole.Manager ? (
							<Calls />
						) : (
							<Navigate to='/PersonalAccount' />
						)
					}
				/>
				{/*<Route path='/PhoneBook' element={<PhoneBook />} />*/}
				{/*<Route path="/SearchOrder" element={userRole === UserRole.Admin || userRole === 'ADMIN' || userRole === UserRole.Manager ? <SearchOrder /> : <Navigate to="/PersonalAccount" />} />*/}
				{/*<Route path="/adminka" element={userRole === UserRole.Admin ? <Adminka /> : <Navigate to="/PersonalAccount" />} />*/}
				{/*<Route path='/Acceptance' element={userRole === 'Туркистанская' || userRole === 'Выдача' || userRole === 'Отправка' || userRole === UserRole.Admin ? <Acceptance /> : <Navigate to="/PersonalAccount" />} />*/}
				{/*<Route path='/Shipment' element={userRole === 'Туркистанская' || userRole === 'Приёмка' || userRole === 'Отправка' || userRole === UserRole.Admin ? <Shipment /> : <Navigate to="/PersonalAccount" />} />*/}
			</Routes>
		</>
	)
}

export default MainPage
