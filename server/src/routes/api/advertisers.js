import express from 'express';
import createError from 'http-errors';
import Organization from '../../models/Organization';
const router = express.Router();

router.get('/advertisers', async (req, res, next) => {
	const organizations = await (await Organization.query()).map(organization => {
		return {
			id: organization.id,
			name: organization.name,
			image: organization.getImageUrl()
		};
	});

	res.json(organizations);
});

router.get('/advertisers/form', async (req, res, next) => {
    const ids = req.body.advertisers;

    const organizations = await Organization.query().where('id', 'in', ids);



    res.json(form);
});

router.get('/advertisers/:id', async (req, res, next) => {
	const organization = await Organization.query().findById(req.params.id);
	
	organization.form = organization.fetchForm();

	if(!organization) {
		return next(createError(404, "Advertiser not found"));
	}

	res.json(organization);
});

export default router;