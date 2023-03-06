import { rest } from 'msw';
import { planets } from './fixtures';

export const handlers = [
	rest.post('/planet/', (req, res, ctx) => {
		if (req.body.searchPhrase) {
			const planet = planets.find((planet) => planet.name.toLowerCase() === req.body.searchPhrase.toLowerCase());
			return res(ctx.status(200), ctx.json({ planet }));
		}

		return res(ctx.status(200), ctx.json({ planet: null }));
	}),
];
