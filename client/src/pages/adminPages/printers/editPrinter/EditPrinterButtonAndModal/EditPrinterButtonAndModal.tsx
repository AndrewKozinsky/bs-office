import React from 'react'
import { Button, Modal } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { Employee, Printer } from '../../../../../types/user.ts'
import { useEditPrinterStore } from '../editEmployeeStore.ts'
import EditPrinterForm from '../EditPrinterForm/EditPrinterForm.tsx'
import { useGetChangeModalVisibility } from './fn/modal.ts'

type EditEmployeeButtonAndModalProps = {
	printer: Printer
}

function EditPrinterButtonAndModal(props: EditEmployeeButtonAndModalProps) {
	const { printer } = props

	const currentPrinterId = useEditPrinterStore((s) => s.currentPrinterId)

	const showModal = useGetChangeModalVisibility(printer.printer_id)
	const closeModal = useGetChangeModalVisibility(null)

	return (
		<>
			<Button icon={<EditOutlined />} onClick={showModal} />
			<Modal
				title='Редактирование принтера'
				open={currentPrinterId === printer.printer_id}
				onCancel={closeModal}
				footer={null}
			>
				<EditPrinterForm printerData={printer} />
			</Modal>
		</>
	)
}

export default EditPrinterButtonAndModal
