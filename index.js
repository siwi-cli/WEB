const Koa = require('koa')
const app = new Koa()

// error
const errorMiddleware = require('./app/middlewares/ErrorMiddleware')
app.use(errorMiddleware)

// logger
const logger = require('koa-logger')
app.use(logger())

// body parser
const parser = require('koa-bodyparser')
app.use(parser())

// session
const session_config = {
    key: '_gzh:sess',
    /** (string) cookie key (default is koa:sess) */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 86400000,
    autoCommit: true,
    /** (boolean) automatically commit headers (default true) */
    overwrite: true,
    /** (boolean) can overwrite or not (default true) */
    httpOnly: true,
    /** (boolean) httpOnly or not (default true) */
    signed: true,
    /** (boolean) signed or not (default true) */
    rolling: false,
    /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: false,
    /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};
const session = require('koa-session')
app.use(session(session_config, app))

// static
const static = require('koa-static')
app.use(static('./public'))

// views
const views = require('koa-views')
app.use(views(`${__dirname}/app/views`, {
    extension: 'pug'
}))

// router
const router = require('./routes')
app.use(router.routes())
app.use(router.allowedMethods())
const {APP_NAME, APP_PORT} = require('./app/configs')
app.listen(`${APP_PORT}`, () => {
    console.log(`${APP_NAME} is starting`)
})