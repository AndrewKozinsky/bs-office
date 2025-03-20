type RegularOrAsyncFn = ((...args: any[]) => void) | ((...args: any[]) => Promise<void>) | Promise<void>

export function debounce(func: RegularOrAsyncFn, ms: number) {
	// @ts-ignore
	let timeout: undefined | NodeJS.Timeout = undefined

	return function () {
		clearTimeout(timeout)
		// @ts-ignore
		timeout = setTimeout(() => func.apply(this, arguments), ms)
	}
}
