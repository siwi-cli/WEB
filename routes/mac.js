/**
 * @author [siwilizhao]
 * @email [siwilizhao@gmail.com]
 * @create date 2019-03-03 01:40:00
 * @modify date 2019-03-03 01:40:00
 * @desc [MacController]
 */

const MacController = require('../app/controllers/MacController')

const macController = new MacController()

const Router = require('koa-router')
const router = new Router()

router.get('/', macController.index)

module.exports = router