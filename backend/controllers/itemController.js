import Item from '../models/Item.js';
import cloudinary from '../config/cloudinary.js';
import fs from 'fs';

//Public - get all items with filters & pagination
export const getItems = async (req, res) => {
  try {
    const { search, status, category, page = 1, limit = 10 } = req.query;

    //empty filter obj to later add search and status conditions
    const filter = {}; //mongoDB filter

    if (search) {
      filter.name = { $regex: search, $options: 'i' }; /* case-insensitive partial match.. like
            search = pen -> matches = pen or pencil box, etc */
    }

    if (status) {
      filter.status = status.toLowerCase();  //lost or found
    }

    if (category) {
      filter.category = category.toLowerCase();
    }

    const skip = (page - 1) * limit;  //checks h ow many items to skip for pagination

    const items = await Item.find(filter).skip(Number(skip)).limit(Number(limit));

    const totalItems = await Item.countDocuments(filter);

    res.json({
      items,
      totalItems,
      currentPage: Number(page),
      totalPages: Math.ceil(totalItems / limit),
    })
  } catch (err) {
    console.error('Error fetching items:', err);
    res.status(500).json({ message: 'Server error' });
  }
};