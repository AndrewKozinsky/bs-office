import React, { useState } from 'react'
import RegisterForm from '../component/RegisterForm.tsx'
import UserList from './UserList'
import PrintComponent from './PrintComponent'
import ListPrinter from './ListPrinter'
import ListSMS from './ListSMS'

function Adminka() {
	return (
		<div className='container-box'>
			<RegisterForm />
			<UserList />
			{/* <PrintComponent/> */}
			<ListPrinter />
			<ListSMS />
		</div>
	)
}

export default Adminka
