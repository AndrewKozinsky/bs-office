import { Button, Form, FormProps, Input, Radio, Select, Typography } from 'antd'
import React from 'react'
import { useNewOrderStore } from '../newOrderStore/allPagesStore.ts'
import {
	clientTypesRadiosArrData,
	howKnowRadiosArrData,
	repairTypesRadiosArrData,
	useCreateMastersSelectOptionsData,
} from './fn/data.ts'
import { useFetchMasters } from './fn/fetchData.ts'
import './NewOrderForm.scss'
import { FieldType, useGetFailedToSubmitNewOrderForm, useGetSubmitNewOrderForm } from './fn/form.ts'

const { Title } = Typography

const style: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	gap: 8,
}

function NewOrderForm() {
	const [form] = Form.useForm()
	useFetchMasters()

	const failedSubmitNewOrderForm = useGetFailedToSubmitNewOrderForm(form)
	const submitNewOrderForm = useGetSubmitNewOrderForm()

	/*const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
		console.log('Failed:', errorInfo)
	}*/

	return (
		<Form
			form={form}
			layout='vertical'
			name='basic'
			onFinish={submitNewOrderForm}
			// onFinishFailed={}
			onChange={failedSubmitNewOrderForm}
			className='new-order-form'
		>
			<div className='new-order-form__content'>
				<div>
					<Title level={2}>Ремонт</Title>
					<RepairTypeRadio />
				</div>
				<div>
					<Title level={2}>Клиент</Title>
					<ClientNameInput />
					<ClientPhoneInput />
					<ClientTypeRadio />
					<HowKnowRadio />
				</div>
				<div>
					<Title level={2}>Аппарат</Title>
					<DeviceInputs />
				</div>
				<div>
					<Title level={2}>Мастер</Title>
					<MasterSelect />
				</div>
			</div>
			<SubmitFormButton />
		</Form>
	)
}

export default NewOrderForm

function RepairTypeRadio() {
	return (
		<Form.Item<FieldType> name='repairType' rules={[{ required: true, message: 'Отметьте тип ремонта' }]}>
			<Radio.Group style={style} options={repairTypesRadiosArrData} />
		</Form.Item>
	)
}

function ClientNameInput() {
	return (
		<Form.Item<FieldType>
			label='ФИО'
			name='clientName'
			rules={[{ required: true, message: 'Please input your username!' }]}
		>
			<Input />
		</Form.Item>
	)
}

function ClientPhoneInput() {
	return (
		<Form.Item<FieldType>
			label='Телефон'
			name='clientPhone'
			rules={[{ required: true, message: 'Please input your username!' }]}
		>
			<Input />
		</Form.Item>
	)
}

function ClientTypeRadio() {
	return (
		<Form.Item<FieldType>
			label='Статус'
			name='clientStatus'
			rules={[{ required: true, message: 'Please input your username!' }]}
		>
			<Radio.Group style={style} options={clientTypesRadiosArrData} />
		</Form.Item>
	)
}

function HowKnowRadio() {
	return (
		<Form.Item<FieldType> label='Как узнали о нас' name='howToKnowAboutUs'>
			<Radio.Group style={style} options={howKnowRadiosArrData} />
		</Form.Item>
	)
}

function DeviceInputs() {
	return (
		<>
			<Form.Item<FieldType>
				label='Тип аппарата'
				name='deviceType'
				rules={[{ required: true, message: 'Please input your username!' }]}
			>
				<Input />
			</Form.Item>
			<Form.Item<FieldType>
				label='Фирма'
				name='deviceBrand'
				rules={[{ required: true, message: 'Please input your username!' }]}
			>
				<Input />
			</Form.Item>
			<Form.Item<FieldType>
				label='Модель'
				name='deviceModel'
				rules={[{ required: true, message: 'Please input your username!' }]}
			>
				<Input />
			</Form.Item>
			<Form.Item<FieldType>
				label='Серийный модуль'
				name='deviceSerial'
				rules={[{ required: true, message: 'Please input your username!' }]}
			>
				<Input />
			</Form.Item>
			<Form.Item<FieldType>
				label='imei'
				name='deviceImai'
				rules={[{ required: true, message: 'Please input your username!' }]}
			>
				<Input />
			</Form.Item>
			<Form.Item<FieldType> label='Внешний вид' name='deviceAppearance'>
				<Input.TextArea rows={2} />
			</Form.Item>
			<Form.Item<FieldType>
				label='Комплектация'
				name='deviceEquipment'
				rules={[{ required: true, message: 'Please input your username!' }]}
			>
				<Input.TextArea rows={2} />
			</Form.Item>
			<Form.Item<FieldType> label='Дефект' name='deviceDefect'>
				<Input.TextArea rows={2} />
			</Form.Item>
			<Form.Item<FieldType> label='Комментарий' name='deviceComment'>
				<Input.TextArea rows={2} />
			</Form.Item>
		</>
	)
}

function MasterSelect() {
	useCreateMastersSelectOptionsData()

	const mastersOptions = useNewOrderStore((s) => s.mastersSelectOptions)

	return (
		<Form.Item<FieldType> name='master' rules={[{ required: true, message: 'Please input your username!' }]}>
			<Radio.Group style={style} options={mastersOptions} />
		</Form.Item>
	)
}

function SubmitFormButton() {
	const isFormValid = useNewOrderStore((s) => s.isFormValid)

	return (
		<Form.Item label={null}>
			<Button type='primary' htmlType='submit' disabled={!isFormValid}>
				Создать заказ
			</Button>
		</Form.Item>
	)
}
