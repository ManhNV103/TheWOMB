import createError from 'http-errors';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import logger from 'morgan';
import cors from 'cors';
import { Model } from 'objection';
import knex from './lib/knex';

import indexRouter from './routes/index';
import apiRouter from './routes/api';

const app = express();

Model.knex(knex);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(fileUpload({ createParentPath: true }));
app.use(cors());

app.use('/', indexRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	next(createError(404, 'Page not found'));
});

// error handler
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	//res.locals.message = err.message;
	//res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.json({
		status: err.status,
		message: err.message,
		stack: err.stack
	});
});

export default app;