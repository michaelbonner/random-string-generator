export function generateRandomString(stringLength: number): string {
	return Array.from(Array(Math.min(stringLength, 1024)), () =>
		Math.floor(Math.random() * 36).toString(36)
	).join('');
}
