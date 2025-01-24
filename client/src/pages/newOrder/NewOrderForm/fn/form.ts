import { FormInstance } from 'antd'
import { useNewOrderStore } from '../../newOrderStore/allPagesStore.ts'

export type FieldType = {
	repairType: string
	clientName: string
	clientPhone: string
	clientStatus: string
	howToKnowAboutUs: string
	deviceType: string
	deviceBrand: string
	deviceModel: string
	deviceSerial: string
	deviceImai: string
	deviceAppearance: string
	deviceEquipment: string
	deviceDefect: string
	deviceComment: string
	master: string
}

export function useGetFailedToSubmitNewOrderForm(form: FormInstance) {
	return async function () {
		try {
			await form.validateFields()
			useNewOrderStore.setState({ isFormValid: true })
		} catch {
			useNewOrderStore.setState({ isFormValid: false })
		}
	}
}

export function useGetSubmitNewOrderForm() {
	return function (values: FieldType) {
		console.log(values)
	}
}
