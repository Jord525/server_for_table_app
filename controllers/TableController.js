import TableModel from '../models/Table.js'

export const update = async (req, res) => {
    const postId = req.params.id

    await TableModel.updateOne({
        _id: postId
    }, {
        productName: req.body.productName,
        quantity: req.body.quantity,
        weight: req.body.weight,
        purchasePrice: req.body.purchasePrice,
        sellingPrice: req.body.sellingPrice,
    }
    );
    res.json(postId)
}

export const findOne = async (req, res) => {
    try {
        const { id } = req.params
        const post = await TableModel.findById(id)
        res.json(post)
    } catch (error) {
        console.log(error)
    }
}

export const remove = (req, res) => {
    try {
        const postId = req.params.id
        TableModel.findByIdAndDelete({
            _id: postId
        },
            (err, doc) => {
                if (err) {
                    console.log(err)
                    return res.status(500).json({
                        message: 'не удалось удалить статью'
                    })
                }
                if (!doc) {
                    return res.status(404).json({
                        M: "not found"
                    })
                }
            }
        )
        res.json({
            s: true
        })
    } catch (error) {
        console.log(error)
    }
}

export const findAll = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;

    try {
        const posts = await TableModel.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        const count = await TableModel.count();

        res.json({
            posts,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'can not find'
        })
    }
}

export const create = async (req, res) => {
    try {
        const doc = new TableModel({
            productName: req.body.productName,
            quantity: req.body.quantity,
            weight: req.body.weight,
            purchasePrice: req.body.purchasePrice,
            sellingPrice: req.body.sellingPrice,
        });

        const table = await doc.save();
        res.json(table)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'failed to create table'
        })
    }
}