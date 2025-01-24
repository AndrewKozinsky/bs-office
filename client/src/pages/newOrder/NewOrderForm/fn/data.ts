import { useEffect, useMemo } from 'react'
import { addEmptyValueToOptions } from '../../../../common/formUtils.ts'
import { ClientTypes, TypesOfRepair } from '../../../../types/user.ts'
import { AllOrdersStore, useAllOrdersStore } from '../../../allOrders/allPagesStore/allPagesStore.ts'
import { useNewOrderStore } from '../../newOrderStore/allPagesStore.ts'

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

export function useCreateMastersSelectOptionsData() {
	const masters = useNewOrderStore((s) => s.masters)

	useEffect(
		function () {
			if (!masters) return

			const options: AllOrdersStore['mastersSelectOptions'] = masters.map((master) => {
				return {
					label: master.user_name,
					value: master.user_id,
				}
			})

			addEmptyValueToOptions(options)

			useNewOrderStore.setState({ mastersSelectOptions: options })
		},
		[masters],
	)
}
