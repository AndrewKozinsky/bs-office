export type CurrentUser = {
	id: number // 1
	login: string // 'andreyAdmin'
	role: UserRole
}

export enum UserRole {
	Admin = 'admin',
	Master = 'Мастер',
	Manager = 'Менеджер',
	Customer = 'Клиент',
	Issuance = 'Выдача',
	Acceptance = 'Приёмка',
	Sending = 'Отправка',
}

export type User = {
	user_address: string
	user_good_address: Address
	user_id: string // '000000030'
	user_id_oneC: string
	user_legal_address: string // ''
	user_name: string // 'Муксинов Ильшат Наильевич '
	user_phone: string // ''
	user_role: string // 'Инженер'
	user_source: string // ''
	user_type: string // ''
}

export type Employee = {
	staff_computer_name: string // "DESKTOP-BPT5871"
	staff_email: string //	"sabitvrustam@gmail.com"
	staff_external_phone_nomber: string // "89225372836"
	staff_id: string // 	"22"
	staff_id_1c: string // ''
	staff_id_telegram: string // '1496600599'
	staff_internal_phone_nomber: string // '901'
	staff_login: string //  'Sabitov_R_I'
	staff_name: string //  'Сабитов Рустам Ирекович'
	staff_password: string // 'twHQ5Fk0yLcPy19JLkrpXEeP5yE='
	staff_token: string // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDE2MDQzNzYsInVzZXJuYW1lIjoi0KHQsNCx0LjRgtC-0LIg0KDRg9GB0YLQsNC8INCY0YDQtdC60L7QstC40YcifQ.2tFm0Jl5srYgvhre9yD9ATlxXbkiLWA1ySs8orIcAV0'
}

export type Printer = {
	printer_id: string // "1"
	printer_location: string // "Салмышская"
	printer_name: string // "Argox"
	printer_type: string // "Принтер этикеток"
	printer_url: string // "http://192.168.1.220:631/printers/ARGOX_OS-2140_PPLA_203d
}

export type SparePart = {
	id_parts: string // "НФ-00000368"
	name_parts: string // "УСЗУ Китай \"Лягушка\"c LCD дисплеем и USB выходом (цвета в ассортименте/коробка)"
}

export type Address = {
	city_type: string // "г"
	city: string // Оренбург"
	country: string // "Россия"
	house: string // "9"
	latitude: string // "51.831314"
	longitude: string // '55.166997'
	postal_code: string // '460052'
	region_type: string // "обл"
	region: string // 'Оренбургская обл'
	street_type: string // "пер" или "ул."
	street: string // 'Липовая'
	full_adress: string // "Самарская обл. .  .  д. "
	uri: string // ''
}

// Откуда пользователь узнал про нас
export type UserDiscoverySource = { sources_id: '000000006'; sources_name: 'Гугл' }

export type DeviceType = {
	device_type_id: string // '000000001'
	device_type_name: string // 'SSD накопитель'
}

export type DeviceModel = {
	device_model_id: string // "000000373"
	device_model_name: string // "iPhone 7"
}

export type Device = {
	device_id: string
	device_model_id: '000005165'
	device_model_name: 'P30'
	device_model: string
	device_full_model: string
	device_sale_date: string
	device_type_id: string
	device_type: string
	device_brand_id: string
	device_brand: string
	device_excel_model: string
	device_sn: string
	device_imei: string
	device_appearance: string
	device_equipment: string
	device_stated_defect: string
	device_defect: string
	work_description: string
	diagnostics_result: string
	recommendations: string
}

export type DeviceBrand = {
	device_brand_id: '000000001'
	device_brand_name: '3q'
}

export type IOrder = {
	device: Device
	end_user: User
	master: User
	meneger: User
	order_branch: string // 'Салмышская'
	order_date: string // '20.01.2025 15:24:16'
	order_id: string // '00НФ-025822'
	order_repair_condition: ''
	order_status: 'К выдаче'
	order_type:
		| 'Обслуживание картриджей'
		| 'Диагностика'
		| 'Оформление'
		| 'К выдаче'
		| 'Выдан. Оплачен'
		| 'Запчасть в пути'
	oredr_change_date: string // ''
	parts: any[]
	retail_order_date: string // ''
	retail_user: User
	works: any[]
}

export type IOrderStatusName = string

export type TypesOfRepair = [
	'Простой ремонт',
	'Сложный ремонт',
	'Авторизованный ремонт',
	'Наша гарантия',
	'Поставка товаров',
	'Проверка качества',
	'Обслуживание картриджей',
	'Хоз. работы',
]

export type ClientTypes = ['Физ. лицо', 'Юр. лицо', 'ИП', 'Гос. орган']

export type MessageTemplate = {
	template_id: string // "39"
	template_text: string // 'Здравствуйте ваше устройство готово к выдаче'
	template_type: MessageTemplateType
}

export type MessageTemplateType = 'SMS' | 'TG' | 'Звонок'

export type EmployeePhone = {
	user_address: ''
	user_good_address: Address
	user_id: string
	user_id_oneC: string
	user_legal_address: string
	user_name: string // 'Приемка_софт'
	user_phone: string // '110'
	user_role: ''
	user_source: ''
	user_type: ''
}
