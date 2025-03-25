import React from 'react'
import { Button, Form, Select, Typography } from 'antd'
import { callsQuery } from '../../../requests/calls/callsQuery.ts'
import { useCallToClientFormStore } from './callToClientFormStore.ts'
import { FieldType } from './fn/form.ts'
import { checkCallToClientForm, FieldNames } from './fn/form.ts'
import {
	useCreateSelectOptionsData,
	useGetChangePhonesSelectInput,
	useGetOnAddressSearchChange,
} from './fn/selectOptions.ts'
import { useGetCallToClient } from './fn/submit.ts'
import OrderContentContainer from '../OrderContentContainer/OrderContentContainer.tsx'

type CallToClientFormProps = {
	clientPhone: string
}

function CallToClientForm(props: CallToClientFormProps) {
	const { clientPhone } = props

	const getStaffPhonesRes = callsQuery.getStaffPhones().useQuery()

	const [form] = Form.useForm<FieldType>()
	useCreateSelectOptionsData()
	const phonesSelectOptions = useCallToClientFormStore((s) => s.phonesSelectOptions)
	const changeStaffPhonesSelect = useGetChangePhonesSelectInput(form)
	const onAddressSearchChange = useGetOnAddressSearchChange()
	const isFormValid = useCallToClientFormStore((s) => s.isFormValid)
	const callToClient = useGetCallToClient(form, clientPhone)

	if (getStaffPhonesRes.isLoading) {
		return <p>Загрузка...</p>
	}

	if (getStaffPhonesRes.error) {
		return <p>Во время загрузки произошла ошибка.</p>
	}
	return (
		<OrderContentContainer header='Звонок клиенту'>
			<Form layout='vertical' form={form} onFinish={callToClient} onChange={() => checkCallToClientForm(form)}>
				<Form.Item<FieldType> label='Номер сотрудника' name={FieldNames.phone} rules={[{ required: true }]}>
					<Select
						options={phonesSelectOptions}
						onChange={changeStaffPhonesSelect}
						onSearch={onAddressSearchChange}
						showSearch
						filterOption={false}
					/>
				</Form.Item>
				<Form.Item style={{ textAlign: 'right' }}>
					<Button htmlType='submit' disabled={!isFormValid} type='primary'>
						Позвонить клиенту
					</Button>
				</Form.Item>
			</Form>
		</OrderContentContainer>
	)
}

export default CallToClientForm
