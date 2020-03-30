import express from 'express';
import createError from 'http-errors';
import Organization from '../../models/Organization';
import authenticate from '../../middleware/auth';
const router = express.Router();

router.get('/organizations', authenticate, async (req, res, next) => {
	const organizations = await (await Organization.query()).map(organization => {
		organization.image = organization.getImageUrl()
		return organization;
	});

	res.json(organizations);
});

router.post('/organizations', async (req, res, next) => {
	const organization = await Organization.query().insertGraph(req.body);

	res.json(organization);
});

router.get('/organizations/:id', authenticate, async (req, res, next) => {
	const organization = await Organization.query().findById(req.params.id);

	if(!organization) {
		return next(createError(404, 'Organization not found'));
	}

	res.json(organization);
});

router.patch('/organizations/:id', authenticate, async (req, res, next) => {
	const organization = await Organization
		.query()
		.patchAndFetchById(req.params.id, req.body);

	res.json(organization);
});

router.delete('/organizations/:id', authenticate, async (req, res, next) => {
	const numDeleted = await Organization.query().deleteById(req.params.id);

	res.json({
		numDeleted: numDeleted
	});
});

router.get('/organizations/:id/:image', async (req, res, next) => {
	const { id, image } = req.params;

	const organization = await Organization.query().findById(id);

	if(!organization) {
		return next(createError(404, 'Organization not found'));
	}

	if(organization.image !== image) {
		return next(createError(404, 'Organization image not found'));
	}

	res.sendFile(organization.getImageFile());
})

export default router;