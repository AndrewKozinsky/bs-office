import React from 'react'
import { Button, Modal, Typography } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { Printer, SparePart } from '../../../../types/user.ts'
import { useDeleteSparePartsStore } from './deleteSparePartStore.ts'
import { useGetDeleteSparePart } from './fn/deleteSparePart.ts'
import { useGetChangeModalVisibility } from './fn/changeModalVisibility.ts'

const { Text } = Typography

type DeleteSparePartButtonProps = {
	sparePart: SparePart
}

function DeleteSparePartButton(props: DeleteSparePartButtonProps) {
	const { sparePart } = props

	const currentSparePartId = useDeleteSparePartsStore((s) => s.currentSparePartId)
	const loading = useDeleteSparePartsStore((s) => s.loading)

	const showModal = useGetChangeModalVisibility(sparePart.id_parts)
	const hideModal = useGetChangeModalVisibility(null)
	const deleteSparePartBox = useGetDeleteSparePart(sparePart.id_parts)

	return (
		<>
			<Button onClick={showModal} color='danger' variant='solid' icon={<DeleteOutlined />} />
			<Modal
				title='Удаление запасной части'
				open={currentSparePartId === sparePart.id_parts}
				onOk={deleteSparePartBox}
				confirmLoading={loading}
				onCancel={hideModal}
				okText='Удалить'
				cancelText='Отмена'
			>
				<Text>Удалить {sparePart.name_parts}?</Text>
			</Modal>
		</>
	)
}

export default DeleteSparePartButton
