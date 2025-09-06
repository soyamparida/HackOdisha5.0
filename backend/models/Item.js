import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ['lost', 'found'], required: true },
    location: { type: String, required: true },
    //a reference to the user who posted the item
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: { type: Date, default: Date.now },
});

const Item = mongoose.model("Item", itemSchema);

export default Item;
