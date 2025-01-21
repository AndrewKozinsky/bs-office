import React, { useEffect, useState } from 'react'
import { GoTriangleDown } from 'react-icons/go'
import { IoSearch } from 'react-icons/io5'
import { useLocation } from 'react-router-dom'
import { deviceRequests } from '../../../../requests/deviceRequests.ts'
import { GetOrdersParams, GetOrdersRes, ordersRequests } from '../../../../requests/ordersRequests.ts'
import { staffRequests } from '../../../../requests/staffRequests.ts'
import { useAllOrdersStore } from '../allPagesStore/allPagesStore.ts'

function OrderFilter() {
	const [isOrdersVisible, setIsOrdersVisible] = useState(false)
	const [filteredDeviceBrands, setFilteredDeviceBrands] = useState([])
	const [selectedDeviceBrand, setSelectedDeviceBrand] = useState(null)
	const [filteredDeviceTypes, setFilteredDeviceTypes] = useState([])
	const [selectedDeviceType, setSelectedDeviceType] = useState(null)
	const [staffs, setStaffs] = useState([])
	const [deviceTypes, setDeviceTypes] = useState([])
	const [deviceBrands, setDeviceBrands] = useState([])
	const [searchValue, setSearchValue] = useState('')

	const location = useLocation()
	const [loading, setLoading] = useState(false)

	const [formData, setFormData] = useState({
		master: '',
		master_id: '',
		deviceType: '',
		deviceTypeId: '',
		deviceBrand: '',
		deviceBrandId: '',
	})

	useEffect(() => {
		const params = new URLSearchParams(location.search)

		const fio = params.get('fio')
		if (fio) {
			setSearchValue(fio)
			handleSearch(fio)
		}
	}, [location.search])

	const handleSearch = (fio) => {
		/*setSearchParams({
			fio: fio || null,
			master: formData.master || null,
			deviceType: formData.deviceType || null,
			deviceBrand: formData.deviceBrand || null,
		})*/
		// setCurrentPage(1)
	}

	useEffect(() => {
		fetchStaff()
		fetchDeviceTypes()
		fetchDeviceBrands()
	}, [])

	const searchDeviceBrands = (input) => {
		const filtered = deviceBrands.filter((brand) =>
			brand.device_brand_name.toLowerCase().includes(input.toLowerCase()),
		)
		setFilteredDeviceBrands(filtered)
	}

	const resetDeviceBrand = () => {
		setFilteredDeviceBrands([])
		setSelectedDeviceBrand(null)
	}

	const searchDeviceTypes = (input) => {
		const filtered = deviceTypes.filter((type) => type.device_type_name.toLowerCase().includes(input.toLowerCase()))
		setFilteredDeviceTypes(filtered)
	}

	const resetDeviceType = () => {
		setFilteredDeviceTypes([])
		setSelectedDeviceType(null)
	}

	const handleDeviceBrandClick = (brand) => {
		setFormData((prevData) => ({
			...prevData,
			deviceBrandId: brand.device_brand_id,
			deviceBrand: brand.device_brand_name,
		}))
		setSelectedDeviceBrand(brand.device_brand_name)
		setFilteredDeviceBrands([])
	}

	const handleDeviceBrandChange = (e) => {
		const { value } = e.target
		setFormData((prevData) => ({
			...prevData,
			deviceBrand: value,
		}))
		if (value.trim() !== '') {
			searchDeviceBrands(value)
		} else {
			resetDeviceBrand()
		}
	}

	const fetchStaff = async () => {
		try {
			const response = await staffRequests.getStaff()

			const staffsData = response.data.map((employee, i) => ({
				user_id: i,
				user_name: employee.user_name,
			}))

			setStaffs(staffsData)
		} catch (error) {
			console.error('Error fetching staff:', error)
		}
	}

	const fetchDeviceTypes = async () => {
		try {
			const response = await deviceRequests.getDeviceTypes()

			setDeviceTypes(Array.isArray(response.data) ? response.data : [])
		} catch (error) {
			console.error('Error fetching device types:', error)
			setDeviceTypes([])
		}
	}

	const fetchDeviceBrands = async () => {
		try {
			const response = await deviceRequests.getDeviceBrands()

			setDeviceBrands(Array.isArray(response.data) ? response.data : [])
		} catch (error) {
			console.error('Error fetching device brands:', error)
			setDeviceBrands([])
		}
	}

	const handleDeviceTypeChange = (e) => {
		const { value } = e.target
		setFormData((prevData) => ({
			...prevData,
			deviceType: value,
		}))

		if (value.trim() !== '') {
			searchDeviceTypes(value)
		} else {
			resetDeviceType()
		}
	}

	const handleDeviceTypeClick = (type) => {
		setFormData((prevData) => ({
			...prevData,
			deviceType: type.device_type_name,
		}))
		setSelectedDeviceType(type.device_type_name)
		setFilteredDeviceTypes([])
	}

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			handleSearch(searchValue)
		}
	}

	return (
		<div className='order-filter'>
			<div className='orders-box'>
				<div className='orders-box-nav'>
					<h1 onClick={() => setIsOrdersVisible(!isOrdersVisible)}>
						Дополнительные параметры поиска
						<GoTriangleDown className={`icon ${isOrdersVisible ? 'rotate' : ''}`} />
					</h1>
				</div>
				<div className={`orders-content ${isOrdersVisible ? 'visible' : ''}`}>
					<label className='input-column'>
						<select
							name='master'
							value={formData.master}
							onChange={(e) => setFormData({ ...formData, master: e.target.value })}
						>
							<option value='' disabled hidden>
								Выберите мастера
							</option>
							{staffs.map((staff) => (
								<option key={staff.user_id} value={staff.user_id}>
									{staff.user_name}
								</option>
							))}
						</select>
					</label>
					<div className='device-form'>
						<label className='input-container'>
							<input
								type='text'
								name='deviceType'
								value={formData.deviceType}
								onChange={handleDeviceTypeChange}
								onInput={(e) => {
									/*if (e.target.value === '') {
									setFilteredDeviceTypes([])
									setSelectedDeviceType(null)
								}*/
								}}
								placeholder='Тип аппарата'
							/>
							{formData.deviceType !== '' && (
								<div
									className='matched-deviceType'
									style={{
										display:
											filteredDeviceTypes.length > 0 && selectedDeviceType === null
												? 'block'
												: 'none',
									}}
								>
									{filteredDeviceTypes.map((type, index) => (
										<div
											className='device_vibor'
											key={index}
											onClick={() => handleDeviceTypeClick(type)}
										>
											<h1>{type.device_type_name}</h1>
										</div>
									))}
								</div>
							)}
						</label>

						<label className='input-container'>
							<input
								type='text'
								name='deviceBrand'
								value={formData.deviceBrand}
								onChange={handleDeviceBrandChange}
								onInput={(e) => {
									/*if (e.target.value === '') {
									setFilteredDeviceBrands([])
									setSelectedDeviceBrand(null)
								}*/
								}}
								placeholder='Бренд аппарата'
							/>
							{formData.deviceBrand !== '' && (
								<div
									className='matched-deviceBrand'
									style={{
										display:
											filteredDeviceBrands.length > 0 && selectedDeviceBrand === null
												? 'block'
												: 'none',
									}}
								>
									{filteredDeviceBrands.map((brand, index) => (
										<div
											className='device_vibor'
											key={index}
											onClick={() => handleDeviceBrandClick(brand)}
										>
											<h1>{brand.device_brand_name}</h1>
										</div>
									))}
								</div>
							)}
						</label>
					</div>
				</div>
				<div className='search-container'>
					<input
						type='text'
						className='search-input'
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
						onKeyDown={handleKeyDown}
						placeholder='Введите номер'
					/>
					<div className='search-icon' onClick={() => handleSearch(searchValue)}>
						<IoSearch />
					</div>
				</div>
			</div>
		</div>
	)
}

export default OrderFilter
