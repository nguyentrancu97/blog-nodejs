class NewsController {
    index(req, res) {
        res.send('news');
    }

    detail(req, res) {
        res.send('chi tiet news');
    }
}

module.exports = new NewsController();
