/**
 * @author [siwilizhao]
 * @email [siwilizhao@gmail.com]
 * @create date 2019-03-03 01:58:17
 * @modify date 2019-03-03 01:58:17
 * @desc [AuthController]
 */
const AuthController = {
    async login(ctx) {
        return ctx.render('auth/login')
    },
    async ssoLogin(ctx, next) {
        const got = require('got')
        const username = ctx.request.body.username
        const password = ctx.request.body.password
        const app_id = 'wwwx'
        const app_secret = 'wdafnasd'

        // 请求授权服务器
        return ctx.body = {access_token: 'sdafnsdkfnkasdlfnk'}
    },
    async logout(ctx) {
        
    },
    async forget(ctx) {

    } 
}
module.exports = AuthController