import { SelectOption } from '../types/commonTypes.ts'

/**
 * Если в выпадающем списке есть поле поиска значения,
 * то Ант ищет по value. Чтобы искал по label нужно указать эту функцию.
 * Пример:
 * <Select
 * 	showSearch
 * 	filterOption={searchByLabelInSelectInput}
 * 	options={[...]}
 * />
 * @param searchString — искомое значение
 * @param option — объект элемента списка
 */
export function searchByLabelInSelectInput(searchString: string, option: SelectOption) {
	// Search by label (case-insensitive)
	return option.label.toLowerCase().includes(searchString.toLowerCase())
}

export function addEmptyValueToOptions(options: SelectOption[]) {
	options.unshift({ label: 'Не выбрано', value: '' })
}
