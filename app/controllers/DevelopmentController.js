const DevelopmentController = {
    async index(ctx) {
        return ctx.render('development/index')
    }
}

module.exports = DevelopmentController