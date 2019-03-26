const Koa = require('koa');
const app = new Koa();


app.use(async ctx=>{
	ctx.body='welcome to koa';
});

app.listen(4000);