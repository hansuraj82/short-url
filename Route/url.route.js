const express = require('express');
const router = express.Router();
const {generateShortUrlHandler,redirectToWebsiteHandler} = require('../controllers/url.controller');

router.post('/url',generateShortUrlHandler);
router.get('/:shortId',redirectToWebsiteHandler)

module.exports = router;