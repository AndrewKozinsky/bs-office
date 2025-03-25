import React from 'react'
import { Button, Modal } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { Printer, SparePart } from '../../../../../types/user.ts'
import { useEditSparePartStore } from '../editSparePartStore.ts'
import EditSparePartForm from '../EditSparePartForm/EditSparePartForm.tsx'
import { useGetChangeModalVisibility } from './fn/modal.ts'

type EditSparePartButtonAndModalProps = {
	sparePart: SparePart
}

function EditSparePartButtonAndModal(props: EditSparePartButtonAndModalProps) {
	const { sparePart } = props

	const currentSparePartId = useEditSparePartStore((s) => s.currentSparePartId)

	const showModal = useGetChangeModalVisibility(sparePart.id_parts)
	const closeModal = useGetChangeModalVisibility(null)

	return (
		<>
			<Button icon={<EditOutlined />} onClick={showModal} />
			<Modal
				title='Редактирование запасной части'
				open={currentSparePartId === sparePart.id_parts}
				onCancel={closeModal}
				footer={null}
			>
				<EditSparePartForm sparePartData={sparePart} />
			</Modal>
		</>
	)
}

export default EditSparePartButtonAndModal
