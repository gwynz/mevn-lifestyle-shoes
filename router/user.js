const express = require('express');
const router = express.Router();
const User = require('../model/user');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
    try {
        const users = await User.find();

        res.json(users);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});
router.post('/', async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10)
        });
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
});
//udapte
router.post('/save', async (req, res) => {
    let user = req.body;
    try {
        let doc = await User.findOneAndUpdate({
            _id: user._id
        }, {
            $set: {
                ...user
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
        var userId = req.params.id;
        const newItem = await User.findByIdAndDelete(userId)
        if (!newItem) res.status(404).send("No item found")
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err)
    }
})



module.exports = router;