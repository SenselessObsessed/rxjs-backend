const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const { koaBody } = require('koa-body');
const cors = require('@koa/cors');
const uuid = require('uuid');

const app = new Koa();
const router = new Router();
app.use(koaBody());
app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 7070;

const fakeRes = {
	status: 'ok',
	timestamp: 1553400000,
	messages: [
		{
			id: uuid.v4(),
			from: 'anya@ivanova',
			subject: 'Hello from Anya',
			body: 'Long message body here',
			received: 1553108200,
		},
		{
			id: uuid.v4(),
			from: 'alex@petrov',
			subject: 'Hello from Alex Petrov!',
			body: 'Long message body here',
			received: 1553107200,
		},
	],
};

router.get('/messages/unread', async ctx => {
	ctx.response.body = fakeRes;
});

http.createServer(app.callback()).listen(port);
