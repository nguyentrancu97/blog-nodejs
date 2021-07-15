const routerNews = require('./news');
const routerSite = require('./site');

function route(app) {
    // prefix news
    app.use('/news', routerNews);
    app.use('/site', routerSite);
}

module.exports = route;
