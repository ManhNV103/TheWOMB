import express from 'express';
import advertiserRouter from './advertisers';

const router = express.Router();

router.use(advertiserRouter);

export default router;