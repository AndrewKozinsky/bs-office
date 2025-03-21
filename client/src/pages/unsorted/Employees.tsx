import React, { useState, useEffect } from 'react'
import PageHead from '../pageHeader/PageHead/PageHead.tsx'
// import Messenger from './unsorted/messenger/Messenger'
import axios from 'axios'

function Employees() {
	const [users, setUsers] = useState([])

	useEffect(() => {
		fetchUsers()
	}, [])

	const fetchUsers = async () => {
		try {
			const response = await axios.get('https://192.168.1.211:5001/users')
			const usersData = response.data
			console.log('Список пользователей:', usersData)
			setUsers(usersData)
		} catch (error) {
			console.error('Ошибка при получении списка пользователей:', error)
		}
	}

	const handleAddUser = (userData) => {
		setUsers((prevUsers) => [...prevUsers, userData])
	}

	return (
		<div>
			<PageHead />
			<div className='container-box'>
				<div>
					<h2>Список пользователей:</h2>
					<ul>
						{users.map((user) => (
							<li key={user.id}>
								<p>Имя: {user.name}</p>
								<p>Роль: {user.role}</p>
							</li>
						))}
					</ul>
				</div>
				{/*{role === 'Директор' && <Reg onAddUser={handleAddUser} />}*/}
			</div>
			{/*<Messenger />*/}
		</div>
	)
}

export default Employees
