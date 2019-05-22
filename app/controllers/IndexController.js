/**
 * @author [siwilizhao]
 * @email [siwilizhao@gmail.com]
 * @create date 2019-03-03 01:41:45
 * @modify date 2019-03-03 01:41:45
 * @desc [IndexController]
 */
 const IndexController  = {
    async index(ctx, next) {
        return ctx.render('home/index')
    }
}

module.exports = IndexController