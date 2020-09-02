const express = require('express');
const router = express.Router();
const News = require('./model/news');
const Content = require('./model/content');


router.get('/', async (req, res) => {
    try {
        const news = await News.find();
        const contents = await Content.find();
        var listNewWithContent = [];
        news.forEach(item => {
            listNewWithContent.push({
                title: item,
                contents: contents.filter((content) => {
                    return item._id.equals(content.title_id)
                })
            });
        });
        res.json(listNewWithContent);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});
router.post('/', async (req, res) => {
    const news = new News(req.body);
    try {
        const newContent = await news.save();
        res.status(201).json(newContent);
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
});
//udapte
router.post('/save', async (req, res) => {
    let news = req.body;
    try {
        let doc = await News.findOneAndUpdate({
            _id: news._id
        }, {
            $set: {
                title: news.title
            }
        }, {
            new: true
        });
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
});
// Delete user
router.delete('/:id', async (req, res) => {
    try {
        var title_id = req.params.id;
        const events = await Content.
        deleteMany({
            title_id
        }, function (err) {
            if (err) console.log(err);
        });
        const newItem = await News.findByIdAndDelete(title_id)
        if (!newItem) res.status(404).send("No item found")
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err)
    }
})



module.exports = router;