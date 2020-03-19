import express from 'express';
const router = express.Router();

const advertisers = [
	{
		id: 1,
		name: "Goondiwindi Regional Council",
		image: "image.png"
	},
	{
		id: 2,
		name: "7 News Toowomba",
		image: "image.png"
	},
	{
		id: 3,
		name: "Goondiwindi Argus",
		image: "image.png"
	},
	{
		id: 4,
		name: "Care Goodiwindi",
		image: "image.png"
	},
	{
		id: 5,
		name: "Macintyre Gazette",
		image: "image.png"
	},
	{
		id: 6,
		name: "Queensland Country Life",
		image: "image.png"
	}
];

/* GET users listing. */
router.get('/', function(req, res, next) {
	res
		.status(200)
		.json(advertisers);
});

export default router;