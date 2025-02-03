export function parseOrderNumber(text: string) {
	const orderNumberRegex = /00НФ-0*(\d+)/
	const match = text.match(orderNumberRegex)

	if (match) {
		return match[1]
	} else {
		return null
	}
}
