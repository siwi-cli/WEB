/**
 * @author [siwilizhao]
 * @email [siwilizhao@gmail.com]
 * @create date 2019-03-03 01:42:32
 * @modify date 2019-03-03 01:42:32
 * @desc [ServicesController]
 */
const ServicesController = {
    async index(ctx, next) {
        return ctx.render('services/index', {title: 'service'})
    }
}
module.exports = ServicesController