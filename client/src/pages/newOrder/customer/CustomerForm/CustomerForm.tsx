import React from 'react'
import { Form } from 'antd'

type CustomerFormProps = {}

function CustomerForm(props: CustomerFormProps) {
	const [form] = Form.useForm()

	// const failedSubmitNewOrderForm = useIsNewOrderFormValid(form)
	// const submitNewOrderForm = useGetSubmitNewOrderForm()

	return (
		<Form
			form={form}
			layout='vertical'
			// onFinish={submitNewOrderForm}
			// onChange={failedSubmitNewOrderForm}
			className='new-order-form'
		>
			<IndividualPerson />
		</Form>
	)
}

export default CustomerForm

function IndividualPerson() {
	return <p>IndividualPerson</p>
}

function LegalPerson() {
	return <p>LegalPerson</p>
}
