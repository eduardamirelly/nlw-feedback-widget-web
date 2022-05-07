import express from 'express'
import nodemailer from 'nodemailer';

import { prisma } from './prisma';

export const routes = express.Router();

const transport = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: "d06ca115164475",
		pass: "0b65bc042625de"
	}
});

routes.post('/feedbacks', async (req, res) => {
	const { type, comment, screenshot } = req.body;

	const feedback = 

	await transport.sendMail({
		from: 'Equipe Feedget <oi@feedget.com>',
		to: 'Eduarda Mirelly <mirelly.eduarda404@gmail.com>',
		subject: 'Novo feedback',
		html: [
			`<div style="font-familly: sans-serif; font-size: 16px; color: #111;">`,
			`<p>Tipo do feedback: ${type}</p>`,
			`<p>Comentário: ${comment}</p>`,
			`</div>`,
		].join('\n')
	});

	return res.status(201).json({ data: feedback });
});