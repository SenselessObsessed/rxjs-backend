const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const { koaBody } = require('koa-body');
const cors = require('@koa/cors');
const { faker } = require('@faker-js/faker');

const app = new Koa();
const router = new Router();
app.use(koaBody());
app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 7070;

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

router.get('/messages/unread', async ctx => {
	if (Math.random() > 0.9) {
		ctx.response.status = 500;
		ctx.response.body = { status: 'nothing' };
	} else {
		const fakeRes = {
			status: 'ok',
			timestamp: Date.now(),
			messages: [],
		};

		const countMessagesToSend = getRandomInt(0, 10);

		for (let i = 0; i < countMessagesToSend; i++) {
			fakeRes.messages.push({
				id: faker.string.uuid(),
				from: faker.internet.email(),
				subject: faker.word.words({ count: { min: 2, max: 5 } }),
				body: faker.word.words({ count: { min: 5, max: 10 } }),
				received: faker.date.between({ from: '2000-01-01', to: Date.now() }),
			});
		}

		ctx.response.body = fakeRes;
	}
});

http.createServer(app.callback()).listen(port);
