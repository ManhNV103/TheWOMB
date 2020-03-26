import express from 'express';
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

/* GET users listing. */
router.get('/submissions', function(req, res, next) {
	res
		.status(200)
		.json(submissions);
});

export default router;