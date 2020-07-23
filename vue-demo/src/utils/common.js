export const DEFAULT_PREFIX = 'VD'
export function getIdPrefix (prefix = DEFAULT_PREFIX) {
	return `${prefix}_${new Date().getTime()}`
}