import express from 'express';
const router = express.Router();

const organizations = [
	{
		id: 1,
		name: "Goondiwindi Regional Council",
		image: "goondiwindi_region.png"
	},
	{
		id: 2,
		name: "7 News Toowomba",
		image: "7news.png"
	},
	{
		id: 3,
		name: "Goondiwindi Argus",
		image: "goondiwindi_argus.png"
	},
	{
		id: 4,
		name: "Care Goodiwindi",
		image: "goondiwindi_care.jpg"
	},
	{
		id: 5,
		name: "Macintyre Gazette",
		image: "macintyre.png"
	},
	{
		id: 6,
		name: "Queensland Country Life",
		image: "qld_country_life.png"
	}
];

/* GET users listing. */
router.get('/organizations', async (req, res, next) => {
	res
		.status(200)
		.json(organizations);
});

export default router;