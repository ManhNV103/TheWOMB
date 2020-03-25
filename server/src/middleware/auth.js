import createError from 'http-errors';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../constants';

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;    

    if(authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, JWT_SECRET, (err, user) => {
            if(err) {
                next(createError(403, 'Token verification failed'));
            }

            req.user = user;
            next();
        });
    } else {
        next(createError(401, 'Authentication failed'))
    }
};

export default authenticate;