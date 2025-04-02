const URL = require('../models/url.model');
const shortid = require('shortid');


const generateShortUrlHandler = async (req, res) => {
    try {
        if (!req.body.url) return res.status(400).json({ error: "url is required" });
        const shortId = shortid.generate();
        const result = await URL.create({
            shortId: shortId,
            redirectedUrl: req.body.url,
            visitedHistory: []
        })
        return res.status(201).json({ msg: result });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error });
    }
}

const redirectToWebsiteHandler = async (req, res) => {
    try {
        const shortId = req.params.shortId;
        console.log(shortId);
        
        const result = await URL.findOneAndUpdate({
            shortId
        },
        {
            $push: {
                visitedHistory: {
                    timeStamps: Date.now()
                }
            }
        }
        )
        console.log(result);
         res.status(301).redirect(result.redirectedUrl)
    } catch(err) {
        return res.status(500).json({error: err});
    }
}

module.exports = { generateShortUrlHandler, redirectToWebsiteHandler };