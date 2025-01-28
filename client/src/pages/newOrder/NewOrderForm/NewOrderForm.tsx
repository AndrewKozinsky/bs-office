import React from 'react'
import { Button, Form, Input, Radio, Select, Typography } from 'antd'
import { useNewOrderStore } from '../newOrderStore/allPagesStore.ts'
import {
	clientTypesRadiosArrData,
	howKnowRadiosArrData,
	repairTypesRadiosArrData,
	useCreateAddressSuggestionsSelectOptionsData,
	useCreateDeviceBrandsSelectOptionsData,
	useCreateDeviceModelsSelectOptionsData,
	useCreateDeviceTypesSelectOptionsData,
	useCreateMastersRadiosData,
} from './fn/data.ts'
import {
	useFetchAddresses,
	useFetchDeviceBrands,
	useFetchDeviceModels,
	useFetchDeviceTypes,
	useFetchMasters,
} from './fn/fetchData.ts'
import {
	useGetOnAddressSearchChange,
	useGetOnDeviceBrandsSearchChange,
	useGetOnDeviceModelsSearchChange,
	useGetOnDeviceTypeSearchChange,
} from './fn/formInputs.ts'
import { FieldType, useIsNewOrderFormValid, useGetSubmitNewOrderForm } from './fn/formSubmit.ts'
import './NewOrderForm.scss'

const { Title } = Typography

const style: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	gap: 8,
}

function NewOrderForm() {
	const [form] = Form.useForm()

	const failedSubmitNewOrderForm = useIsNewOrderFormValid(form)
	const submitNewOrderForm = useGetSubmitNewOrderForm()

	return (
		<Form
			form={form}
			layout='vertical'
			name='basic'
			onFinish={submitNewOrderForm}
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
					<MyClientAddressSelect />
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

function MyClientAddressSelect() {
	useFetchAddresses()
	useCreateAddressSuggestionsSelectOptionsData()

	const onAddressSearchChange = useGetOnAddressSearchChange()

	const addressSearch = useNewOrderStore((s) => s.addressSearch)
	const addressOptions = useNewOrderStore((s) => s.addressSuggestionsSelectOptions)

	return (
		<Form.Item<FieldType>
			label='Адрес'
			name='clientAddress'
			rules={[{ required: true, message: 'Введите, пожалуйста, адрес' }]}
		>
			<Select
				options={addressOptions}
				showSearch
				onSearch={onAddressSearchChange}
				searchValue={addressSearch}
				filterOption={false}
			/>
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
			<DeviceType />
			<DeviceBrand />
			<DeviceModel />
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

function DeviceType() {
	useFetchDeviceTypes()
	useCreateDeviceTypesSelectOptionsData()

	const onDeviceTypeSearchChange = useGetOnDeviceTypeSearchChange()

	const deviceTypeSearch = useNewOrderStore((s) => s.deviceTypeSearch)
	const deviceTypesSelectOptions = useNewOrderStore((s) => s.deviceTypesSelectOptions)

	return (
		<Form.Item<FieldType>
			label='Тип аппарата'
			name='deviceType'
			rules={[{ required: true, message: 'Выберите тип аппарата' }]}
		>
			<Select
				options={deviceTypesSelectOptions}
				showSearch
				onSearch={onDeviceTypeSearchChange}
				searchValue={deviceTypeSearch}
				filterOption={false}
			/>
		</Form.Item>
	)
}

function DeviceBrand() {
	useFetchDeviceBrands()
	useCreateDeviceBrandsSelectOptionsData()

	const onDeviceBrandSearchChange = useGetOnDeviceBrandsSearchChange()

	const deviceBrandSearch = useNewOrderStore((s) => s.deviceBrandSearch)
	const deviceBrandsSelectOptions = useNewOrderStore((s) => s.deviceBrandsSelectOptions)

	return (
		<Form.Item<FieldType>
			label='Производитель'
			name='deviceBrand'
			rules={[{ required: true, message: 'Выберите производителя аппарата' }]}
		>
			<Select
				options={deviceBrandsSelectOptions}
				showSearch
				onSearch={onDeviceBrandSearchChange}
				searchValue={deviceBrandSearch}
				filterOption={false}
			/>
		</Form.Item>
	)
}

function DeviceModel() {
	useFetchDeviceModels()
	useCreateDeviceModelsSelectOptionsData()

	const onDeviceModelSearchChange = useGetOnDeviceModelsSearchChange()

	const deviceModelSearch = useNewOrderStore((s) => s.deviceModelSearch)
	const deviceModelsSelectOptions = useNewOrderStore((s) => s.deviceModelsSelectOptions)

	return (
		<Form.Item<FieldType>
			label='Модель'
			name='deviceBrand'
			rules={[{ required: true, message: 'Выберите модель аппарата' }]}
		>
			<Select
				options={deviceModelsSelectOptions}
				showSearch
				onSearch={onDeviceModelSearchChange}
				searchValue={deviceModelSearch}
				filterOption={false}
				disabled={!deviceModelsSelectOptions}
			/>
		</Form.Item>
	)

	/*return (
		<Form.Item<FieldType>
			label='Модель'
			name='deviceModel'
			rules={[{ required: true, message: 'Please input your username!' }]}
		>
			<Input />
		</Form.Item>
	)*/
}

function MasterSelect() {
	useFetchMasters()
	useCreateMastersRadiosData()

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
		<Form.Item label={null} className='new-order-form__submit-button'>
			<Button type='primary' htmlType='submit' disabled={!isFormValid} block size='large'>
				Создать заказ
			</Button>
		</Form.Item>
	)
}
