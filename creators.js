const express = require('express');
const router = express.Router();
const Creator = require('./model/creator');

router.get('/', async (req, res) => {
    try {
        const creator = await Creator.findOne();
        res.json(creator);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

router.post('/', async (req, res) => {
    let creator = req.body.creator;
    try {
        let doc = await Creator.findOneAndUpdate({
            _id: creator._id
        }, {
            $set: {
                name: creator.name,
                nameOfNews: creator.nameOfNews
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

module.exports = router;