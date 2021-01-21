const Order = require('../models/order.model.js');

exports.getOrder = async (req, res, next) => {
    try {
        const query = Order.findById(req.params.uuid);

        const doc = await query;

        if (!doc) {
            //prevents error from crashing server sends response back regarding error
                res.status(404).json({
                    status: 'fail',
                    message: 'order not found with this id',
                })
        }

        res.status(200).json({
            status: 'success',
            data: {
                doc
            },
        })
    }
    catch (err) {
            res.status(400).json({
                status: 'error',
                message: err
            })
            next(new Error('Unauthorized'))
    }
}

exports.getAll = async (req, res, next) => {
        try {
            const doc = await Order.find();

            if (!doc) {
                res.status(404).json({
                    status: 'fail',
                    message: 'order not found with this id',
                });
            }

            res.status(200).json({
                status: 'success',
                data: {
                    doc,
                },
            });
        } catch (err) {
            res.status(400).json({
                status: 'error',
                message: err,
            });
            next(new Error('Unauthorized'));
        }
}

exports.createOrder = async (req, res, next) => {
    try {
        let orderBody;
        if (req.body) {
            orderBody = req.body;
        }
        //allows for order creations without all needed fields being present
        const doc = await Order.create(orderBody);

        res.status(201).json({
            status: 'success',
            data: {
                uuid: doc._id,
            },
        });
    } catch (err) {
            res.status(400).json({
                status: 'fail',
                message: err,
            })
            next(new Error('Unauthorized'));
    }
};

exports.updateOrder = async (req, res, next) => {
    try {
        const doc = await Order.findByIdAndUpdate(req.params.uuid, req.body, {
            new:true //returns the new revision
        });

        if (!doc) {
                res.status(404).json({
                    status: 'fail',
                    message: 'order not found with this id',
                })
                next(new Error('Invalid'))
        }
        res.status(200).json({
            status: 'success',
            data: {
                doc,
            },
        });
    } catch (err) {
            res.status(400).json({
                status: 'fail',
                message: err,
            })
            next(new Error('Unauthorized'));

    }
};

exports.deleteOrder = async (req, res, next) => {
    try {
        const doc = await Order.findByIdAndDelete(req.params.uuid);

        if (!doc) {
            res.status(404).json({
                status: 'fail',
                message: 'order not found with this id',
            });

            next(new Error('Invalid'));
        }

        res.status(200).json({
            status: 'success',
            message: 'order deleted',
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',

            message: err,
        });

        next(new Error('Unauthorized'));
    }
};