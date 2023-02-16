import mongoose from "mongoose";

const TableModel = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    quantity: {
        type: String,

    },
    weight: {
        type: String,

    },
    purchasePrice: {
        type: String,

    },
    sellingPrice: {
        type: String,

    },

},
    {
        timestamps: true
    })
export default mongoose.model('Table', TableModel) 