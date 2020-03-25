import express from 'express';
import jwt from 'jsonwebtoken';
import createError from 'http-errors';
import authenticate from '../../middleware/auth';
import { ADMIN_USERNAME, ADMIN_PASSWORD, JWT_SECRET } from '../../constants';

const router = express.Router();

const authenticated = (username, password) => {
    if(username == ADMIN_USERNAME) {
        if(password == ADMIN_PASSWORD) {
            return true;
        }
    }

    return false;
};

router.post('/authenticate', (req, res, next) => {
    const { username, password } = req.body;

    console.log(ADMIN_USERNAME, ADMIN_PASSWORD)

    if(authenticated(username, password)) {
        const issuedAt = Math.floor(new Date() / 1000);

        const accessToken = jwt.sign({
            id: 1,
            username: username,
            issued_at: issuedAt
        }, JWT_SECRET);

        res.json({
            token: accessToken
        });
    }

    next(createError(401, 'Authentication failed'));

});

export default router;