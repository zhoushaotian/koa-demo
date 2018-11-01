const server = require('koa-maker');
const app = server.app;


app.use(async (ctx, nexr) => {
    console.log('路由后过滤器');
})
