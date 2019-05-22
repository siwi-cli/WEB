/**
 * @author [siwilizhao]
 * @email [siwilizhao@gmail.com]
 * @create date 2019-03-05 16:36:42
 * @modify date 2019-03-05 16:36:42
 * @desc [GzhController]
 */

const GzhController = {

    /**
     * 首页
     *
     * @param {*} ctx
     * @param {*} next
     * @returns
     * @memberof GzhController
     */
    async index(ctx, next) {
        return ctx.render('gzh/index')
    },
    /**
     * 分类
     *
     * @param {*} ctx
     * @param {*} next
     * @returns
     * @memberof GzhController
     */
    async category(ctx, next) {
        return ctx.render('gzh/category')
    },
    /**
     * 详情
     *
     * @param {*} ctx
     * @param {*} next
     * @returns
     * @memberof GzhController
     */
    async detail(ctx, next) {
        return ctx.render('gzh/detail')
    },
    /**
     * 排行榜
     *
     * @param {*} ctx
     * @param {*} next
     * @returns
     * @memberof GzhController
     */
    async ranking(ctx, next) {
        return ctx.render('gzh/ranking')
    },

    /**
     * 推荐
     *
     * @param {*} ctx
     * @param {*} next
     * @returns
     * @memberof GzhController
     */
    async recommend(ctx, next) {
        return ctx.render('gzh/recommend')
    },

    /**
     * 定制
     *
     * @param {*} ctx
     * @param {*} next
     * @returns
     * @memberof GzhController
     */
    async customization(ctx, next) {
        return ctx.render('gzh/customization')
    }
    
}
module.exports = GzhController