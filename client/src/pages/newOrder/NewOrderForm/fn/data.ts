import { ClientTypes, TypesOfRepair } from '../../../../types/user.ts'

export const repairTypes: TypesOfRepair = [
	'Простой ремонт',
	'Сложный ремонт',
	'Авторизованный ремонт',
	'Наша гарантия',
	'Поставка товаров',
	'Проверка качества',
	'Обслуживание картриджей',
	'Хоз. работы',
]

export const repairTypesRadiosArrData = repairTypes.map((item) => {
	return { value: item, label: item }
})

export const clientTypes: ClientTypes = ['Физ. лицо', 'Юр. лицо', 'ИП', 'Гос. орган']

export const clientTypesRadiosArrData = clientTypes.map((item) => {
	return { value: item, label: item }
})

export const howKnow = ['Гугл', 'Яндекс', '2ГИС', 'Сайт', 'Эл. почта', 'СМС', 'Вывеска', 'Рекомендация', 'Повторный']

export const howKnowRadiosArrData = howKnow.map((item) => {
	return { value: item, label: item }
})
