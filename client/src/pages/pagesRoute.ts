export const pagesRoute = {
	personalAccount: {
		path: '/personal-account',
		name: 'Личная страница',
	},
	newOrder: {
		path: '/new-order',
		name: 'Новый заказ',
	},
	maxvi: {
		path: '/maxvi',
		name: 'Maxvi',
	},
	warrantyRepair: {
		path: '/warrantyRepair',
		name: 'Гарантийный ремонт',
	},
	orders: {
		path: '/orders',
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
	phoneBook: {
		path: '/phoneBook',
		name: 'Телефонная книга',
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
	},
	acceptance: {
		path: '/Acceptance',
		name: 'Выдача',
	},
	shipment: {
		path: '/Shipment',
		name: 'Отгрузка',
	},
}
