import React from 'react'
import { Button, Form, Select, Typography } from 'antd'
import { useCallToClientFormStore } from './callToClientFormStore.ts'
import { FieldType } from './fn/form.ts'
import { useFetchStaffPhones } from './fn/fetchData.ts'
import { checkCallToClientForm, FieldNames } from './fn/form.ts'
import { useCreateSelectOptionsData, useGetChangePhonesSelectInput } from './fn/selectOptions.ts'
import { useGetCallToClient } from './fn/submit.ts'

const { Title } = Typography

type CallToClientFormProps = {
	clientPhone: string
}

function CallToClientForm(props: CallToClientFormProps) {
	const { clientPhone } = props

	useFetchStaffPhones()

	const [form] = Form.useForm<FieldType>()
	useCreateSelectOptionsData()
	const phonesSelectOptions = useCallToClientFormStore((s) => s.phonesSelectOptions)
	const changeStaffPhonesSelect = useGetChangePhonesSelectInput(form)
	const isFormValid = useCallToClientFormStore((s) => s.isFormValid)
	const callToClient = useGetCallToClient(form, clientPhone)

	return (
		<div>
			<Title level={3}>Звонок клиенту</Title>
			<Form layout='vertical' form={form} onFinish={callToClient} onChange={() => checkCallToClientForm(form)}>
				<Form.Item<FieldType> label='Номер сотрудника' name={FieldNames.phone} rules={[{ required: true }]}>
					<Select options={phonesSelectOptions} onChange={changeStaffPhonesSelect} />
				</Form.Item>
				<Form.Item style={{ textAlign: 'right' }}>
					<Button htmlType='submit' disabled={!isFormValid} type='primary'>
						Позвонить клиенту
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default CallToClientForm
