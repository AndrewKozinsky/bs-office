import { FormInstance } from 'antd'
import { CreateOrderBody, ordersRequests } from '../../../../requests/ordersRequests.ts'
import { useNewOrderStore } from '../../newOrderStore/allPagesStore.ts'

export enum FormNames {
	repairType = 'repairType',
	clientName = 'clientName',
	clientPhone = 'clientPhone',
	clientAddress = 'clientAddress',
	clientStatus = 'clientStatus',
	howToKnowAboutUs = 'howToKnowAboutUs',
	deviceType = 'deviceType',
	deviceBrand = 'deviceBrand',
	deviceModel = 'deviceModel',
	deviceSerial = 'deviceSerial',
	deviceImai = 'deviceImai',
	deviceAppearance = 'deviceAppearance',
	deviceEquipment = 'deviceEquipment',
	deviceDefect = 'deviceDefect',
	deviceComment = 'deviceComment',
	master = 'master',
}

export type FieldType = Record<FormNames, string>

export function useIsNewOrderFormValid(form: FormInstance) {
	return async function () {
		form.validateFields({ validateOnly: true })
			.then(() => {
				useNewOrderStore.setState({ isFormValid: true })
			})
			.catch((errorData) => {
				if (errorData.errorFields.length) {
					useNewOrderStore.setState({ isFormValid: false })
				}
			})
	}
}

export function useGetSubmitNewOrderForm() {
	return function (values: FieldType) {
		console.log(values)
		debugger

		/*const cleanData: CreateOrderBody = {
			retail_user: {
				// user_id: formData.user_id,
				// user_name: values.clientName,
				// user_phone: values.clientPhone,
				// user_address: values.address,
				// user_legal_address: '',
				// user_type: formData.userType,
				// user_source: formData.source_user_id,
				// user_role: '',
			},

			master: {
				// user_id: formData.master_id,
			},
			device: {
				// device_model_id: formData.deviceModelId,
				// device_sale_date: '',
				// device_type_id: formData.deviceTypeId || '',
				// device_type: formData.deviceType || '',
				// device_brand_id: formData.brandId,
				// device_full_model: formData.deviceType + ' ' + formData.brand + ' ' + formData.model,
				// device_brand: formData.brand || '',
				// device_model: formData.model || '',
				// device_excel_model: '',
				// device_sn: formData.serialNumber || '',
				// device_imei: formData.imei,
				// device_appearance: formData.appearanceComments || '',
				// device_equipment: formData.equipmentComments || '',
				// device_stated_defect: formData.defect || '',
			},
			// comment: formData.comment,
			// parts: [],
			// works: [],
			sources: {
				// sources_id: formData.source_user_id,
				// sources_name: formData.source_user_name,
			},
		}*/

		// const response = await ordersRequests.createOrder(cleanData)
	}
}
