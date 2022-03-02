import { generateRandomString } from '../functions/generateRandomString';

export async function get({ params }) {
	return {
		body: generateRandomString(params.stringLength || 32)
	};
}
