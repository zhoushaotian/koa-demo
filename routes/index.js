const server = require('koa-maker');
const router = server.getRouter('/');
const app = server.app;

const service = require('../service');


router.get('/', async(ctx, next) => {
    try {
        const data = await new Promise(function(resolve, reject) {
            service.userModal.find().limit(30).exec(function(err, res) {
                if(err) {
                    return reject(err);
                }
                return resolve(res)
            })
        })
        await ctx.render('index.hbs', {
            msg: data
        });
    } catch(err) {
        ctx.body = err.message
    }
})

module.exports = router;