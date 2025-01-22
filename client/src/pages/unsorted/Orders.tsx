import React, { useState, useEffect } from 'react'
import LoadingAnimation from '../../common/commonComponents/LoadingAnimation/LoadingAnimation.tsx'
import QRcodeScaner from './QRcodeScaner'

function Orders() {
	const [currentPage, setCurrentPage] = useState(1)
	const [itemsPerPage, setItemsPerPage] = useState(10)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`api/order/${itemsPerPage}/${(currentPage - 1) * itemsPerPage}`)
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`)
				}
				const json = await response.json()
				setLoading(false)
			} catch (error) {
				console.error('Ошибка загрузки данных:', error)
			}
		}

		fetchData()
	}, [itemsPerPage, currentPage])

	return (
		<div>
			<div className='container-box'>
				<div className='box'>
					<div className='box-line'></div>
					<div className='box-serah'>
						{/*<input
							type='text'
							value={searchTerm}
							onChange={handleSearchTermChange}
							placeholder='Введите номер заказа'
						/>*/}
						{/*<button onClick={handleSearch}> Найти</button>*/}
					</div>
					<QRcodeScaner />
					<div className='box-main'>{loading && <LoadingAnimation />}</div>
				</div>
			</div>
		</div>
	)
}

export default Orders
