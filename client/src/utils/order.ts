/**
 * Convert order id (00НФ-027348) to number (27348)
 * @param orderId — order id from 1c
 */
export function getOrderNumberFrom1cOrderId(orderId: string): string {
	return orderId.slice(6)
}
