import express from 'express';
import jwt from 'jsonwebtoken';
import createError from 'http-errors';
import { getUnixTime, addHours, addDays } from 'date-fns';
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
    const { username, password, rememberMe } = req.body;

    if(!authenticated(username, password)) {
		return next(createError(401, 'Authentication failed'));
    }

    let expiryAt = getUnixTime(addHours(new Date(), 1));

    if(rememberMe) {
        expiryAt = getUnixTime(addDays(new Date(), 30));
    }
    
    const accessToken = jwt.sign({
        id: 1,
        username: username,
        expiry_at: expiryAt
    }, JWT_SECRET);

    res.json({
        token: accessToken
    });
});

export default router;