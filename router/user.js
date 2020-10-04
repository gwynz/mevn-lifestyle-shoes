const express = require('express');
const router = express.Router();
const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
router.post('/register', async (req, res) => {
    try {

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10)
        });
        User.findOne({
            email: user.email
        }).then(user => {
            if (user) {
                res.status(400).json({
                    message: 'Email already exists'
                });
            }
        })
        const newUser = await user.save();
        console.log(newUser);
        jwt.sign({
            userId: newUser._id
        }, 'secretkey', function (err, token) {
            res.status(201).json({
                token: token,
                user: newUser
            });
        });
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
});
router.post('/login', async (req, res) => {
    try {
        const user = new User({
            email: req.body.email,
            password: req.body.password
        });
        var oldUser = User.findOne({
            email: user.email
        }).then(u => {
            if (!u) {
                res.status(400).json({
                    message: 'User not exist'
                });
            }
            if (!bcrypt.compareSync(user.password, u.password)) {
                res.status(400).json({
                    message: 'Incorrect password'
                });
            }
            // all ok => create token and send it to frontend
            jwt.sign({
                userId: u._id,
                name: u.name,
                email: u.email
            }, 'secretkey', function (err, token) {
                res.status(201).json({
                    token: token,
                    user: u
                });
            });
        })
        if (!oldUser) {
            res.status(400).json({
                message: 'Cannot find user'
            });
        }
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

router.get('/:id', async (req, res) => {
    try {
        var user_id = req.params.id;
        const user = await User.findById(user_id).exec();
        if (!user) res.status(404).send("No user found")
        res.status(200).json(user)
    } catch (err) {
        res.status(500).send(err)
    }
})



module.exports = router;