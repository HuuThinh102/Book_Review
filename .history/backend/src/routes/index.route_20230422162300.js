
// const adminRouter = require('./admin.route');
// const booksRouter = require('./books.route');
const authRouter = require('./auth.route');
const siteRouter = require('./site.route');
const reviewsRouter = require('./reviews.route');


function route(app) {
    // app.use('/admin', adminRouter);
    app.use('/auth', authRouter);
    app.use('/reviews', reviewsRouter);
    app.use('/', siteRouter);
}

module.exports = route;