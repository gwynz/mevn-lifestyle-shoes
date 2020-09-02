const express = require('express');
const router = express.Router();
const Content = require('./model/content');
const upload = require('./multer');
const cloudinary = require('./cloudinary');
const fs = require('fs')

router.get('/', async (req, res) => {
    try {
        const contents = await Content.find();
        res.json(contents);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

router.post('/', async (req, res) => {
    const content = new Content(req.body);
    try {
        const newContent = await content.save();
        res.status(201).json(newContent);
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
});
//udapte
router.post('/update', async (req, res) => {
    let content = req.body;
    try {
        let doc = await Content.findOneAndUpdate({
            _id: content._id
        }, {
            $set: {
                text: content.text
            }
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
        const odcontent = await Content.findByIdAndDelete(req.params.id)

        if (!odcontent) res.status(404).send("No item found")
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err)
    }
})

router.use('/upload-images', upload.array('image'), async (req, res) => {
    const uploader = async (path) => await cloudinary.uploads(path, 'Images')
    if (req.method === 'POST') {
        const urls = []
        const files = req.files
        for (const file of files) {
            const {
                path
            } = file;
            const newPath = await uploader(path)
            urls.push(newPath);
            fs.unlinkSync(path);
            const content = new Content({
                ...req.body,
                urlImage: newPath.url
            });
            console.log(content)
            try {
                await content.save();
            } catch (err) {
                res.status(400).json({
                    message: err.message
                });
            }
        }
        res.status(200).json({
            message: 'image upload successfully',
            data: urls
        })
    } else {
        res.status(405).json({
            err: 'image upload error'
        })
    }
})

module.exports = router;