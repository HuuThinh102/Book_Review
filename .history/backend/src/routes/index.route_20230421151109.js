
// const adminRouter = require('./admin.route');
// const booksRouter = require('./books.route');
// const authRouter = require('./auth.route');
const siteRouter = require('./site.route');
const reviewsRouter = require('./reviews.route');

function route(app) {
    // app.use('/admin', adminRouter);
    // app.use('/books', booksRouter);
    // app.use('/auth', authRouter);
    // app.use('/users', userRouter);
    app.use('/', siteRouter);
    app.usr('/reviews', reviewsRouter);
}

module.exports = route;