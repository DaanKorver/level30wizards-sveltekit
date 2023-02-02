import { kitClient } from '../lib/graphql/client';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const recipeTitles = await kitClient.getRecipeTitles();
	return recipeTitles;
}) satisfies PageServerLoad;
