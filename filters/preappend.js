const server = require('koa-maker');
const app = server.app;
const Handlebars = require('handlebars');
const handlebarsLayout = require('handlebars-layouts');
const fs = require('fs');
const path = require('path');
const hbHelpers = require('handlebars-helpers');


function read(file) {
	return fs.readFileSync(path.resolve(__dirname, '../views/partials/', file), 'utf8');
}

app.use(async(ctx, next) => {
    console.log('路由前过滤器');
    console.log(new Date().getTime());
    // 注册模板布局
    handlebarsLayout.register(Handlebars);
    Handlebars.registerPartial({
        layout: read('layout.hbs'),
    });
    hbHelpers(['array', 'comparison', 'date', 'logging', 'math', 'number', 'path', 'regex', 'string', 'url'], {
        handlebars: Handlebars
    })
    await next();
})
