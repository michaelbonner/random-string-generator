import { error } from '@sveltejs/kit';
import { generateRandomString } from '../../functions/generateRandomString';

/** @type {import('./$types').RequestHandler} */
export function GET({ params }) {
	const stringLength = Number(params?.stringLength ?? 0);
	if (isNaN(stringLength)) {
		throw error(400, 'String length must be a number');
	}

	return new Response(String(generateRandomString(stringLength || 32)));
}
