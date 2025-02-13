export const audioRequests = {
	// Получение списка телефонов сотрудников
	async getFile(name: string) {
		const resp = await fetch('/audio/' + name)
		return resp.blob()
	},
}
