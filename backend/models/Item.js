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
    imageUrl: { type: String, required: true},
    Id_card: { type: String, required: true},
    Date: { type: Date, default: Date.now },
    category: { type: String, default: 'general' },
});

const Item = mongoose.model("Item", itemSchema);

export default Item;
