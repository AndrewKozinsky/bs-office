export const pagesRoute = {
	personalAccount: {
		path: '/personal-account',
		name: 'Личная страница',
	},
	newOrder: {
		path: '/new-order',
		name: 'Новый заказ',
	},
	warrantyRepair: {
		path: '/warrantyRepair',
		name: 'Гарантийный ремонт',
	},
	orders: {
		path(args?: { clientName?: string }) {
			const path = '/orders'

			if (args && args.clientName) {
				return path + '?clientName=' + args.clientName
			}

			return path
		},
		name: 'Все заказы',
	},
	employees: {
		path: '/employees',
		name: 'Сотрудники',
	},
	changeOrder: {
		path: '/ChangeOrder',
		name: 'Изменение заказа',
	},
	calls: {
		path: '/Calls',
		name: 'Звонки',
	},
	order(orderId: string | number) {
		return {
			path: '/order/' + orderId,
			name: 'Заказ',
		}
	},
	adminka: {
		path: '/adminka',
		name: 'Администрация',
		staff: {
			path: '/adminka/staff',
			name: 'Сотрудники',
		},
		printers: {
			path: '/adminka/printers',
			name: 'Принтеры',
		},
		messageTemplates: {
			path: '/adminka/messageTemplates',
			name: 'Шаблоны сообщений',
		},
	},
	acceptance: {
		path: '/Acceptance',
		name: 'Выдача',
	},
	nomenclature: {
		path: '/nomenclature',
		name: 'Номенклатура',
		spareParts: {
			path: '/nomenclature/spare-parts',
			name: 'Запасные части',
		},
	},
}
