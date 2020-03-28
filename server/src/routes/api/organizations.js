import express from 'express';
import createError from 'http-errors';
import Organization from '../../models/Organization';
const router = express.Router();

router.get('/organizations', async (req, res, next) => {
	const organizations = await Organization.query();

	res.json(organizations);
});

router.post('/organizations', async (req, res, next) => {
	const organization = await Organization.query().insertGraph(req.body);

	res.json(organization);
});

router.get('/organizations/:id', async (req, res, next) => {
	const organization = await Organization.query().findById(req.params.id);

	if(!organization) {
		return next(createError(404, 'Organization not found'));
	}

	res.json(organization);
});

router.patch('/organizations/:id', async (req, res, next) => {
	const organization = await Organization
		.query()
		.patchAndFetchById(req.params.id, req.body);

	res.json(organization);
});

router.delete('/organizations/:id', async (req, res, next) => {
	const numDeleted = await Organization.query().deleteById(req.params.id);

	res.json({
		numDeleted: numDeleted
	});
});

export default router;