import cn from 'classnames'
import React from 'react'
import { Typography } from 'antd'
import LoadingAnimation from '../../../common/components/LoadingAnimation/LoadingAnimation.tsx'
import {
	UTable,
	UTableCell,
	UTableHeadCell,
	UTableHeadRow,
	UTableRow,
} from '../../../common/components/UTable/UTable.tsx'
import { IOrder } from '../../../types/user.ts'
import { useOrdersStore } from '../ordersStore/ordersStore.ts'
import { useGetRedirectToOrderPage } from './fn/textTransform.ts'
import './OrdersTable.scss'

const { Text } = Typography

function OrdersTable() {
	const loadingOrders = useOrdersStore((s) => s.loadingOrders)
	const errorOrders = useOrdersStore((s) => s.errorOrders)
	const allOrders = useOrdersStore((s) => s.allOrders)

	if (loadingOrders) {
		return (
			<div className='order-table__loading-wrapper'>
				<LoadingAnimation />
			</div>
		)
	}

	if (errorOrders) {
		return <p>Во время запроса произошла ошибка.</p>
	}

	if (!allOrders || allOrders.length === 0) {
		return <p>Нет данных для отображения.</p>
	}

	return (
		<UTable block>
			<UTableHeadRow sticky>
				<UTableHeadCell>Заказ</UTableHeadCell>
				<UTableHeadCell>Дата</UTableHeadCell>
				<UTableHeadCell>Статус</UTableHeadCell>
				<UTableHeadCell>Клиент</UTableHeadCell>
				<UTableHeadCell>Устройство</UTableHeadCell>
			</UTableHeadRow>
			{allOrders.map((order) => {
				return <OrderTableRow orderData={order} key={order.order_id} />
			})}
		</UTable>
	)
}

export default OrdersTable

type OrderTableRowProps = {
	orderData: IOrder
}

function OrderTableRow(props: OrderTableRowProps) {
	const { orderData } = props

	const redirectToOrderPage = useGetRedirectToOrderPage(orderData.order_id)

	return (
		<UTableRow onClick={redirectToOrderPage}>
			<UTableCell>
				<Text className='calls-table__date-wrapper'>{orderData.order_id}</Text>
			</UTableCell>
			<UTableCell>
				<Text className='calls-table__date-wrapper'>{orderData.order_date}</Text>
			</UTableCell>
			<OrderStatusCell orderData={orderData} />
			<UTableCell>
				<Text className='calls-table__date-wrapper'>{orderData.retail_user.user_name}</Text>
			</UTableCell>
			<UTableCell>
				<Text className='calls-table__date-wrapper'>{orderData.device.device_full_model}</Text>
			</UTableCell>
		</UTableRow>
	)
}

type OrderStatusCellProps = {
	orderData: IOrder
}

function OrderStatusCell(props: OrderStatusCellProps) {
	const { orderData } = props

	const statusNameClass: Record<typeof orderData.order_type, string> = {
		'Обслуживание картриджей': 'gray',
		Диагностика: 'orange',
		Оформление: 'blue',
		'К выдаче': 'green',
		'Выдан. Оплачен': 'red',
		'Запчасть в пути': 'yellow',
	}

	return (
		<UTableCell>
			<Text>
				<span
					className={cn(
						'order-table__status',
						'order-table__status--' + statusNameClass[orderData.order_status],
					)}
				>
					{orderData.order_status}
				</span>
			</Text>
		</UTableCell>
	)
}
