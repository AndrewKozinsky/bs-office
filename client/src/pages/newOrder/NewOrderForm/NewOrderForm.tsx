import { Button, Form, FormProps, Input, Radio, Select, Typography } from 'antd'
import React from 'react'
import { clientTypesRadiosArrData, howKnowRadiosArrData, repairTypesRadiosArrData } from './fn/data.ts'
import './NewOrderForm.scss'

const { Title } = Typography

type FieldType = {
	username?: string
	password?: string
	remember?: string
}

const style: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	gap: 8,
}

function NewOrderForm() {
	const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
		console.log('Success:', values)
	}

	const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
		console.log('Failed:', errorInfo)
	}

	return (
		<Form
			layout='vertical'
			name='basic'
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
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
			<Form.Item label={null}>
				<Button type='primary' htmlType='submit'>
					Submit
				</Button>
			</Form.Item>
		</Form>
	)
}

export default NewOrderForm

function RepairTypeRadio() {
	return (
		<Form.Item<FieldType> name='username' rules={[{ required: true, message: 'Please input your username!' }]}>
			<Radio.Group style={style} options={repairTypesRadiosArrData} />
		</Form.Item>
	)
}

function ClientNameInput() {
	return (
		<Form.Item<FieldType>
			label='ФИО'
			name='username'
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
			name='username'
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
			name='username'
			rules={[{ required: true, message: 'Please input your username!' }]}
		>
			<Radio.Group style={style} options={clientTypesRadiosArrData} />
		</Form.Item>
	)
}

function HowKnowRadio() {
	return (
		<Form.Item<FieldType>
			label='Как узнали о нас'
			name='username'
			rules={[{ required: true, message: 'Please input your username!' }]}
		>
			<Radio.Group style={style} options={howKnowRadiosArrData} />
		</Form.Item>
	)
}

function DeviceInputs() {
	return (
		<>
			<Form.Item<FieldType>
				label='Тип аппарата'
				name='username'
				rules={[{ required: true, message: 'Please input your username!' }]}
			>
				<Input />
			</Form.Item>
			<Form.Item<FieldType>
				label='Фирма'
				name='username'
				rules={[{ required: true, message: 'Please input your username!' }]}
			>
				<Input />
			</Form.Item>
			<Form.Item<FieldType>
				label='Модель'
				name='username'
				rules={[{ required: true, message: 'Please input your username!' }]}
			>
				<Input />
			</Form.Item>
			<Form.Item<FieldType>
				label='Серийный модуль'
				name='username'
				rules={[{ required: true, message: 'Please input your username!' }]}
			>
				<Input />
			</Form.Item>
			<Form.Item<FieldType>
				label='imei'
				name='username'
				rules={[{ required: true, message: 'Please input your username!' }]}
			>
				<Input />
			</Form.Item>
			<Form.Item<FieldType>
				label='Внешний вид'
				name='username'
				rules={[{ required: true, message: 'Please input your username!' }]}
			>
				<Input.TextArea rows={2} />
			</Form.Item>
			<Form.Item<FieldType>
				label='Комплектация'
				name='username'
				rules={[{ required: true, message: 'Please input your username!' }]}
			>
				<Input.TextArea rows={2} />
			</Form.Item>
			<Form.Item<FieldType>
				label='Дефект'
				name='username'
				rules={[{ required: true, message: 'Please input your username!' }]}
			>
				<Input.TextArea rows={2} />
			</Form.Item>
			<Form.Item<FieldType>
				label='Комментарий'
				name='username'
				rules={[{ required: true, message: 'Please input your username!' }]}
			>
				<Input.TextArea rows={2} />
			</Form.Item>
		</>
	)
}

function MasterSelect() {
	return (
		<Form.Item<FieldType> name='username' rules={[{ required: true, message: 'Please input your username!' }]}>
			<Radio.Group
				style={style}
				options={[
					{ value: 'Мастер 1', label: 'Мастер 1' },
					{ value: 'Мастер 2', label: 'Мастер 2' },
				]}
			/>
		</Form.Item>
	)
}
