import express from 'express';
import authenticate from '../../middleware/auth';
import Submission from '../../models/Submission';
const router = express.Router();

router.get('/submissions', authenticate, async (req, res, next) => {
    const submissions = await(await Submission.query()).map((submission) => {
        submission.default_fields = JSON.parse(submission.default_fields);

        return submission;
    })

	res.json(submissions);
});

router.post('/submissions', authenticate, async (req, res, next) => {
    const submission = await Submission.query().insertGraph({
        defaults: JSON.stringify(req.body.defaults)
    });

    if(req.body.organizationSubmissions) {
        req.body.organizationSubmissions.map(async (item) => {
            await submission.$relatedQuery('organizationSubmissions').insert({
                organization_id: item.organization_id,
                form: JSON.stringify(item.form),
                status: 'PENDING'
            });
        });
    }

    res.json(submission);
});

router.get('/submissions/:id', authenticate, async (req, res, next) => {
    const { id } = req.params;

    const submission = await Submission.query().findById(id);

    if(!submission) {
        return next(createError(404, 'Submission not found'));
    }

    submission.organizationSubmissions = await submission.$relatedQuery('organizationSubmissions')

    res.json(submission);
});

export default router;