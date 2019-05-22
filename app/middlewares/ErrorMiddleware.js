module.exports = async function errorMiddleware(ctx, next) {
    try {
        await next()
    } catch (error) {
        ctx.render('error/500', {message: error.message})
    }
}