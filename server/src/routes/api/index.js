import express from 'express';
import advertiserRouter from './advertisers';
import authRouter from './auth';

const router = express.Router();

router.use(advertiserRouter);
router.use(authRouter);

export default router;