import express from 'express';
import authenticate from '../../middleware/auth';
const router = express.Router();

const submissions = [
	{
		id: 1
	},
	{
		id: 2
	},
	{
		id: 3
	},
	{
		id: 4
	},
	{
		id: 5
	}
];

router.get('/submissions', authenticate, async (req, res, next) => {
	res.json(submissions);
});

export default router;