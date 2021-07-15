const routerNews = require('./news');
const routerSite = require('./site');
const routerHome = require('./home');
function route(app) {
    // prefix news
    app.use('/news', routerNews);
    app.use('/site', routerSite);
    app.use('/', routerHome);
}

module.exports = route;
