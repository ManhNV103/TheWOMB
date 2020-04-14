import express from 'express';
import createError from 'http-errors';
import Organization from '../../models/Organization';
import { generateForm } from '../../services/FormService';
const router = express.Router();

router.get('/advertisers', async (req, res, next) => {
    const organizations = await Organization
        .query()
        .where('disabled', '=', 0);

	const result = await organizations.map(organization => {
		return {
			id: organization.id,
			name: organization.name,
			image: organization.getImageUrl()
		};
	});

	res.json(result);
});

router.get('/advertisers/form', async (req, res, next) => {
    const ids = req.query.selected.split(',');

    if(!ids || ids.length <= 0) {
        return next(createError(500, 'Advertiser array not supplied'));
    }

    const advertisers = await Organization.query().whereIn('id', ids);

    try {
        const form = generateForm(advertisers);

        res.json({
                fields: form.fields
        });
    } catch(e) {
        return next(createError(500, e.message));
    }
});

router.get('/advertisers/:id', async (req, res, next) => {
    const organization = await Organization.query().findById(req.params.id);

	if(!organization) {
		return next(createError(404, "Advertiser not found"));
	}
	
	organization.form = organization.fetchForm();

	res.json(organization);
});

export default router;