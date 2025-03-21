import React from 'react'
import { Button, Modal, Typography } from 'antd'
import { Printer } from '../../../../types/user.ts'
import { useDeletePrintersStore } from './deletePrinterStore.ts'
import { useGetDeletePrinter } from './fn/deletePrinter.ts'
import { useGetChangeModalVisibility } from './fn/changeModalVisibility.ts'
import { DeleteOutlined } from '@ant-design/icons'

const { Text } = Typography

type DeleteEmployeeButtonProps = {
	printer: Printer
}

function DeletePrinterButton(props: DeleteEmployeeButtonProps) {
	const { printer } = props

	const currentPrinterId = useDeletePrintersStore((s) => s.currentPrinterId)
	const loading = useDeletePrintersStore((s) => s.loading)

	const showModal = useGetChangeModalVisibility(printer.printer_id)
	const hideModal = useGetChangeModalVisibility(null)
	const deletePrinterBox = useGetDeletePrinter(printer.printer_id)

	return (
		<>
			<Button onClick={showModal} color='danger' variant='solid' icon={<DeleteOutlined />} />
			<Modal
				title='Удаление принтера'
				open={currentPrinterId === printer.printer_id}
				onOk={deletePrinterBox}
				confirmLoading={loading}
				onCancel={hideModal}
				okText='Удалить'
				cancelText='Отмена'
			>
				<Text>Удалить {printer.printer_name}?</Text>
			</Modal>
		</>
	)
}

export default DeletePrinterButton
