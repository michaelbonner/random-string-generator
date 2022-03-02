import { generateRandomString } from '../functions/generateRandomString';

export async function get({ params }) {
	const stringLength = parseInt(params.stringLength);
	if (stringLength) {
		return {
			body: generateRandomString(stringLength || 32)
		};
	}

	return {
		status: 400
	};
}
