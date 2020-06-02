import createError from 'http-errors';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import logger from 'morgan';
import cors from 'cors';
import { Model } from 'objection';
import knex from './lib/knex';

import indexRouter from './routes/index';
import apiRouter from './routes/api';


var nodemailer = require('nodemailer');
const Email = require('email-templates');


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




app.post('/process', function (req, res) {
	var body = req.body;

	var elList = body.elList.split(',');
	var advertiser_email_list = body.adsList.split(',');
	var errList = [];
	var successList = [];
	

	var email_content = "To whom it may concern.\n\nWe would like to advertise the event detailed below:\n";
	email_content += "\tEvent title: " + body.event_title + "\n";
	email_content += "\tStart date: " + body.start_date + "\n";
	email_content += "\tEnd date: " + body.end_date + "\n";
	email_content += "\tStart time: " + body.start_time + "\n";
	email_content += "\tEnd time: " + body.end_time + "\n";
	email_content += "\tRepeat Frequency: " + body.frequency + "\n";
	email_content += "\tCost: $" + body.cost + "\n";
	email_content += "\tSummary: " + body.summary + "\n";
	email_content += "\tDescription: " + body.description + "\n";
	email_content += "\tLocation: " + body.location + "\n";
	email_content += "\tContact name: " + body.contact_name + "\n";
	email_content += "\tContact email: " + body.contact_email + "\n";
	email_content += "\tContact number: " + body.contact_number + "\n";
	if (body.organisation_name){
		email_content += "\tOrganisation's name: " + body.organisation_name + "\n";
	}
	if (body.event_type){
		email_content += "\tEvent type: " + body.event_type + "\n";
	}
	if (body.audience){
		email_content += "\tAudience: " + body.audience + "\n";
	}

	email_content += "\nThank you.\nRegards.";
	var subject = "Advertising Request: Event " + body.event_title;

	var transporter = nodemailer.createTransport({
		host: 'smtp.mailtrap.io',
		port: 465,
		secure: false,
		auth: {
		  user: 'dbbb02b48feadb',
		  pass: '565b5fa1e00356',
		}
	});
	
	function sendMail (receiver, subject, content) {
		var mailOptions = {
			from: 'goondiwindi@gmail.com',
			to: receiver,
			subject: subject,
			text: content,
		};
	
		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.log(error);
				errList.push(receiver);
			} else {
				successList.push(receiver);
				console.log('Email sent: ' + info.response);
			}
		});
	
	}

	// send emais to all chosen advertisers.
	advertiser_email_list.forEach(email => {
		sendMail(email, subject, email_content);
	});

	// Create email template for Goondiwindi administrator
	var goondiwindi_email_content = "The following email has been sent to ";
	goondiwindi_email_content += advertiser_email_list.join(', ');
	goondiwindi_email_content += "\n\n";
	goondiwindi_email_content += "```\n" + email_content + "\n```";

	sendMail('events@grc.qld.gov.au', subject, goondiwindi_email_content);

	var response = "";
	if (advertiser_email_list.length > 0){
		response += "The event has been registered at " + advertiser_email_list.join(', ') + "\n";
	}

	if (errList.length > 0){
		response += "Failed to register the event at " + errList.join(', ');
	}

	res.send(response);
	console.log(req.body);
});


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

app.listen(3000);

export default app;