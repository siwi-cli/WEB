/**
 * @author [siwilizhao]
 * @email [siwilizhao@gmail.com]
 * @create date 2019-03-03 01:40:00
 * @modify date 2019-03-03 01:40:00
 * @desc [description]
 */

const AuthController = require('../app/controllers/AuthController')
const IndexController = require('../app/controllers/IndexController')
const ServicesController = require('../app/controllers/ServicesController')
const DevelopmentController = require('../app/controllers/DevelopmentController')

const Router = require('koa-router')
const router = new Router()

router.get('/login', AuthController.login)
router.get('/logout', AuthController.logout)
router.post('/sso/login', AuthController.ssoLogin)

router.get('/', IndexController.index)
router.get('/services', ServicesController.index)
router.get('/development', DevelopmentController.index)

module.exports = router