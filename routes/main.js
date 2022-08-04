__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/games', (req, res) => {
    res.sendFile(__path + '/views/games.html')
})
router.get('/register', (req, res) => {
    res.sendFile(__path + '/views/registered.html')
})
router.get('/forgetpass', (req, res) => {
    res.sendFile(__path + '/views/forgetpass.html')
})
router.get('/resetpass', (req, res) => {
    res.sendFile(__path + '/views/reset.html')
})
router.get('/docs', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})
router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index1.html')
})
router.get('/download', (req, res) => {
    res.sendFile(__path + '/docs/download.html')
})
router.get('/search', (req, res) => {
    res.sendFile(__path + '/docs/search.html')
})
router.get('/music', (req, res) => {
    res.sendFile(__path + '/docs/music.html')
})
router.get('/stalk', (req, res) => {
    res.sendFile(__path + '/docs/stalk.html')
})
router.get('/cecan', (req, res) => {
    res.sendFile(__path + '/docs/cecan.html')
})
router.get('/asupan', (req, res) => {
    res.sendFile(__path + '/docs/asupan.html')
})
router.get('/maker', (req, res) => {
    res.sendFile(__path + '/docs/maker.html')
})
router.get('/textprome', (req, res) => {
    res.sendFile(__path + '/docs/textprome.html')
})
router.get('/info', (req, res) => {
    res.sendFile(__path + '/docs/info.html')
})
router.get('/game', (req, res) => {
    res.sendFile(__path + '/docs/game.html')
})
router.get('/islamic', (req, res) => {
    res.sendFile(__path + '/docs/islamic.html')
})
router.get('/simisimi', (req, res) => {
    res.sendFile(__path + '/docs/simisimi.html')
})
router.get('/creator', (req, res) => {
    res.sendFile(__path + '/docs/creator.html')
})
router.get('/primbon', (req, res) => {
    res.sendFile(__path + '/docs/primbon.html')
})
router.get('/randomimage', (req, res) => {
    res.sendFile(__path + '/docs/randomimage.html')
})
router.get('/randomtext', (req, res) => {
    res.sendFile(__path + '/docs/randomtext.html')
})
router.get('/nsfw', (req, res) => {
    res.sendFile(__path + '/docs/nsfw.html')
})
router.get('/anime', (req, res) => {
    res.sendFile(__path + '/docs/anime.html')
})
router.get('/news', (req, res) => {
    res.sendFile(__path + '/docs/news.html')
})
router.get('/other', (req, res) => {
    res.sendFile(__path + '/docs/other.html')
})
router.get('/profile', (req, res) => {
    res.sendFile(__path + '/views/profile.html')
})

module.exports = router
