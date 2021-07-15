class SiteController {
    index(req, res) {
        res.send('site');
    }
}

module.exports = new SiteController();
