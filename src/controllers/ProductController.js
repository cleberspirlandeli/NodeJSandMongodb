const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async showAll(req, res) {
        try {

            const { page = 1 } = req.query;
            const products = await Product.paginate({}, {
                page,
                limit: 10
            });

            return res.status(200).json(products);
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    async showOne(req, res) {
        try {
            const { id } = req.params;

            const product = await Product.findById(id);

            return res.status(200).json(product);
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    async store(req, res) {
        try {

            const product = await Product.create(req.body);

            return res.status(201).json(product);
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;

            const product = await Product.findByIdAndUpdate(id, req.body, { new: true });

            return res.status(200).json(product);
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;

            const product = await Product.findByIdAndRemove(id);

            return res.status(200).json(product);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}


