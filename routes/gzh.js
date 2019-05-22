/**
 * @author [siwilizhao]
 * @email [siwilizhao@gmail.com]
 * @create date 2019-03-03 01:40:00
 * @modify date 2019-03-03 01:40:00
 * @desc [GzhController]
 */

const GzhController = require('../app/controllers/GzhController')

const gzhController = new GzhController()

const Router = require('koa-router')
const router = new Router()

router.get('/', gzhController.index)

module.exports = router