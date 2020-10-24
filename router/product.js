const express = require('express');
const router = express.Router();
const Category = require("../model/category");
const Product = require("../model/product");
const ImagesProduct = require("../model/product_images");
const upload = require('../multer');
const cloudinary = require('../cloudinary');
const fs = require('fs');
const {
    log
} = require('console');

router.get('/categories', async (req, res) => {
    try {
        const categories = await Category.find();

        res.json(categories);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});
router.get('/categories/:id', async (req, res) => {
    try {
        const categories = await Category.find({
            _id: req.params.id
        });

        res.json(categories);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});
router.delete('/categories/:id', async (req, res) => {
    try {
        var id = req.params.id;
        const old = await Category.findByIdAndDelete(id)
        if (!old) res.status(404).send("No item found")
        res.status(200).json(old._id)
    } catch (err) {
        res.status(500).send(err)
    }
});
router.get('/productFromCategories/:id', async (req, res) => {
    try {
        const categories = await (await Category.findOne({
            _id: req.params.id
        }, 'name products').populate("products"));
        res.json(categories.products);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});
router.get('/p/:page', async (req, res, next) => {
    const resPerPage = 5; // results per page
    const page = Number(req.params.page) || 1; // Page
    try {
        const foundProducts = await Product.find().populate('images').skip((resPerPage * page) - resPerPage).limit(resPerPage);
        const numOfProducts = await Product.count();
        res.status(200).json({
            d: foundProducts,
            c: numOfProducts,
            p: page,
            tp: Math.ceil(numOfProducts / resPerPage)
        })
    } catch (err) {
        res.status(500).send(err)
    }
})
router.get('/', async (req, res) => {
    try {
        const products = await Product.find().populate('images');
        res.json(products)
    } catch (error) {
        res.status(500).json({
            message: err.message
        });
    }
})

router.post('/categories', async (req, res) => {
    try {
        const category = new Category({
            name: req.body.name
        })
        const newC = await category.save();
        res.json(newC)
    } catch (error) {
        res.status(500).json({
            message: err.message
        })
    }
})

router.post('/categories', async (req, res) => {
    try {
        const category = new Category({
            name: req.body.name
        })
        const newC = await category.save();
        res.json(newC)
    } catch (error) {
        res.status(500).json({
            message: err.message
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const product = new Product({
            name: req.body.name,
            number: req.body.number,
            price: req.body.price,
            id_category: req.body.id_category,
            enable: req.body.enable
        })
        const newP = await product.save();
        if (newP.id_category) addProductToCategories(newP.id_category, newP);
        res.json(newP)
    } catch (error) {
        res.status(500).json({
            message: err.message
        })
    }
})
router.get('/:id', async (req, res) => {
    try {
        const newP = await Product.find({
            _id: req.params.id
        });

        res.json(newP);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        var id = req.params.id;
        const old = await Product.findByIdAndDelete(id)
        if (!old) res.status(404).send("No item found")
        res.status(200).json(old._id)
    } catch (err) {
        res.status(500).send(err)
    }
});


router.use('/upload-images', upload.array('images'), async (req, res) => {
    const uploader = async (path) => await cloudinary.uploads(path, 'sneaker-images')
    if (req.method === 'POST') {
        const urls = []
        const files = req.files
        const idPd = req.body.productId
        for (const file of files) {
            const {
                path
            } = file;
            const newPath = await uploader(path)
            urls.push(newPath);
            fs.unlinkSync(path);

            // save product images
            const image = new ImagesProduct({
                url: newPath.url,
                name: file.filename,
                id_product: idPd
            })
            await image.save();
            addImageToProduct(idPd, image)
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

const addProductToCategories = function (categoryId, product) {
    Category.findOneAndUpdate({
            _id: categoryId
        }, {
            $push: {
                products: product._id
            }
        },
        function (error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log(success);
            }
        }
    );
};

const addImageToProduct = function (productId, image) {
    Product.findOneAndUpdate({
            _id: productId
        }, {
            $push: {
                images: image._id
            }
        },
        function (error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log(success);
            }
        }
    );
};



module.exports = router;