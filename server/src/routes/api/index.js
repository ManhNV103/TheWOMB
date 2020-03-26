import express from 'express';
import organizationRouter from './organizations';
import submissionRouter from './submissions';
import authRouter from './auth';

const router = express.Router();

router.use(organizationRouter);
router.use(submissionRouter);
router.use(authRouter);

export default router;