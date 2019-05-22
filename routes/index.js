/**
 * @author [siwilizhao]
 * @email [siwilizhao@gmail.com]
 * @create date 2019-03-03 01:40:00
 * @modify date 2019-03-03 01:40:00
 * @desc [web routes]
 */

const AuthController = require('../app/controllers/AuthController')

const Router = require('koa-router')
const router = new Router()

router.get('/login', AuthController.login)
router.get('/logout', AuthController.logout)
router.post('/sso/login', AuthController.ssoLogin)

module.exports = router