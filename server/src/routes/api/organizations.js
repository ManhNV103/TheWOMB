import express from 'express';
import createError from 'http-errors';
import Organization from '../../models/Organization';
import authenticate from '../../middleware/auth';
import { uploadFile, deleteFile, deleteFolder } from '../../services/FileService';
const router = express.Router();

router.get('/organizations', authenticate, async (req, res, next) => {
	const organizations = await (await Organization.query()).map(organization => {
		organization.image = organization.getImageUrl()
		return organization;
	});

	res.json(organizations);
});

router.post('/organizations', async (req, res, next) => {
	const organization = await Organization.query().insertGraph({
        name: req.body.name,
        disabled: req.body.disabled
	});

	res.json(organization);
});

router.get('/organizations/:id', authenticate, async (req, res, next) => {
    const organization = await Organization.query().findById(req.params.id);
    
	if(!organization) {
		return next(createError(404, 'Organization not found'));
	}

	organization.image = organization.getImageUrl()

	res.json(organization);
});

router.patch('/organizations/:id', authenticate, async (req, res, next) => {
	const organization = await Organization
		.query()
		.patchAndFetchById(req.params.id, req.body);

    organization.image = organization.getImageUrl()

	res.json(organization);
});

router.delete('/organizations/:id', authenticate, async (req, res, next) => {
	const id = req.params.id;
	const organization = await Organization.query().findById(id);

	if(!organization) {
		return next(createError(404, 'Organization not found'));
	}

	deleteFile(organization.image, organization);
	deleteFile(organization.config_file, organization);
	deleteFolder(organization);

	const numDeleted = await Organization.query().deleteById(id);

	res.json({
		numDeleted: numDeleted
	});
});

router.post('/organizations/:id/upload/image', authenticate, async (req, res, next) => {
	const image = req.files.file;
	let organization = await Organization.query().findById(req.params.id);

	if(!organization) {
		return next(createError(404, 'Organization not found'));
	}

	const filename = 'thumbnail.' + image.name.split('.').pop();

	uploadFile(image, filename, organization);

	organization = await Organization.query().patchAndFetchById(organization.id, {
		image: filename
	});
	
	res.json(organization);
});

router.post('/organizations/:id/upload/configFile', authenticate, async (req, res, next) => {
	let organization = await Organization.query().findById(req.params.id);
	const configFile = req.files.file;
	const filename = 'config.json';

	if(!organization) {
		return next(createError(404, 'Organization not found'));
	}

	uploadFile(configFile, filename, organization);

	organization = await Organization.query().patchAndFetchById(organization.id, {
		config_file: filename
	});

	res.json(organization);
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