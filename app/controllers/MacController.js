/**
 * @author [siwilizhao]
 * @email [siwilizhao@gmail.com]
 * @create date 2019-03-05 16:36:42
 * @modify date 2019-03-05 16:36:42
 * @desc [MacController]
 */

const MacController = {

    /**
     * 首页
     *
     * @param {*} ctx
     * @param {*} next
     * @returns
     * @memberof MacController
     */
    async index(ctx, next) {
        return ctx.render('mac/index')
    },
    /**
     * 分类
     *
     * @param {*} ctx
     * @param {*} next
     * @returns
     * @memberof MacController
     */
    async category(ctx, next) {
        return ctx.render('mac/category')
    },
    /**
     * 详情
     *
     * @param {*} ctx
     * @param {*} next
     * @returns
     * @memberof MacController
     */
    async detail(ctx, next) {
        return ctx.render('mac/detail')
    },
    /**
     * 排行榜
     *
     * @param {*} ctx
     * @param {*} next
     * @returns
     * @memberof MacController
     */
    async ranking(ctx, next) {
        return ctx.render('mac/ranking')
    },

    /**
     * 推荐
     *
     * @param {*} ctx
     * @param {*} next
     * @returns
     * @memberof MacController
     */
    async recommend(ctx, next) {
        return ctx.render('mac/recommend')
    },

    /**
     * 定制
     *
     * @param {*} ctx
     * @param {*} next
     * @returns
     * @memberof MacController
     */
    async customization(ctx, next) {
        return ctx.render('mac/customization')
    }
    
}
module.exports = MacController