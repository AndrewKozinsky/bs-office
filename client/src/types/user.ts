export type CurrentUser = {
	id: number // 1
	login: string // 'andreyAdmin'
	role: UserRole
}

export enum UserRole {
	Admin = 'Администратор',
	Master = 'Мастер',
	Manager = 'Менеджер',
	Customer = 'Клиент',
	Issuance = 'Выдача',
	Acceptance = 'Приёмка',
	Sending = 'Отправка',
}

export type User = {
	user_address: string
	user_good_address: {
		City: string
		Country: string
		House: string
		Latitude: string
		Longitude: string
		PostalCode: string
		Region: string
		Street: string
		URI: string
	}
	user_id: string // '000000030'
	user_legal_address: string // ''
	user_name: string // 'Муксинов Ильшат Наильевич '
	user_phone: string // ''
	user_role: string // 'Инженер'
	user_source: string // ''
	user_type: string // ''
}

// Откуда пользователь узнал про нас
export type UserDiscoverySource = { sources_id: '000000006'; sources_name: 'Гугл' }

export type DeviceType = {
	device_type_id: string // '000000001'
	device_type_name: string // 'SSD накопитель'
}

export type Device = {
	device_model_id: '000005165'
	device_model_name: 'P30'
}

export type DeviceBrand = {
	device_brand_id: '000000001'
	device_brand_name: '3q'
}

export type Order = {
	device: {
		device_appearance: ''
		device_brand: ''
		device_brand_id: ''
		device_defect: null
		device_equipment: ''
		device_excel_model: ''
		device_full_model: ''
		device_id: ''
		device_imei: ''
		device_model: ''
		device_model_id: ''
		device_sale_date: ''
		device_sn: ''
		device_stated_defect: ''
		device_type: ''
		device_type_id: ''
		diagnostics_result: ''
		recommendations: ''
		work_description: ''
	}
	end_user: {
		user_address: ''
		user_good_address: {
			City: ''
			Country: ''
			House: ''
			Latitude: ''
			Longitude: ''
			PostalCode: ''
			Region: ''
			Street: ''
			URI: ''
		}
		user_id: ''
		user_legal_address: ''
		user_name: ''
		user_phone: ''
		user_role: ''
		user_source: ''
		user_type: ''
	}
	error: ''
	master: {
		user_address: ''
		user_good_address: {
			City: ''
			Country: ''
			House: ''
			Latitude: ''
			Longitude: ''
			PostalCode: ''
			Region: ''
			Street: ''
			URI: ''
		}
		user_id: ''
		user_legal_address: ''
		user_name: ''
		user_phone: ''
		user_role: ''
		user_source: ''
		user_type: ''
	}
	meneger: {
		user_address: ''
		user_good_address: {
			City: ''
			Country: ''
			House: ''
			Latitude: ''
			Longitude: ''
			PostalCode: ''
			Region: ''
			Street: ''
			URI: ''
		}
		user_id: ''
		user_legal_address: ''
		user_name: ''
		user_phone: ''
		user_role: ''
		user_source: ''
		user_type: ''
	}
	order_branch: 'Салмышская'
	order_date: '20.01.2025 15:24:16'
	order_id: '00НФ-025822'
	order_repair_condition: ''
	order_status: 'К выдаче'
	order_type: 'Обслуживание картриджей'
	oredr_change_date: ''
	parts: null
	retail_order_date: ''
	retail_user: {
		user_address: ''
		user_good_address: {
			City: ''
			Country: ''
			House: ''
			Latitude: ''
			Longitude: ''
			PostalCode: ''
			Region: ''
			Street: ''
			URI: ''
		}
		user_id: 'НФ-003463'
		user_legal_address: ''
		user_name: 'Клиент. Картриджи. Салмышская'
		user_phone: ''
		user_role: ''
		user_source: ''
		user_type: 'Физическое лицо'
	}
	works: null
}

export type OrderStatusName = string

export type TypesOfRepair = [
	'Авторизованный ремонт',
	'Наша гарантия',
	'Обслуживание картриджей',
	'Поставка товаров',
	'Проверка качества',
	'Простой ремонт',
	'Сложный ремонт',
	'Хоз работы',
]
