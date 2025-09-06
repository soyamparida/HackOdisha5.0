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

//User - upload new item
export const uploadItem = async (req, res) => {
  try {
    const { name, description, status, location, category } = req.body;

    if (!name || !status || !req.file) {
      return res.status(400).json({ error: 'Missing required fields or image file.' });
    }

   const uploadResults = await Promise.all(
      req.files.map(async (file) => {
        const result = await cloudinary.uploader.upload(file.path);
        fs.unlinkSync(file.path); // delete local file after upload
        return result.secure_url;
      })
    );

    const newItem = new Item({
      name,
      description,
      status,
      location,
      category,
      imageUrl: uploadResults[0],
       Id_card:uploadResults[1],
      owner:req.user._id   //item ownership is taken from the JWT, not user-supplied body
    });

    await newItem.save();

    res.status(201).json({ message: 'Item uploaded successfully', item: newItem });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to upload item' });
  }
};

//User - update item
export const updateItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    if (item.owner.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to update this item' });
    }

    const { name, description, status, location } = req.body;

    if (name) item.name = name;
    if (description) item.description = description;
    if (status) item.status = status;
    if (location) item.location = location;

    if (req.file) {
      const cloudinaryResult = await cloudinary.uploader.upload(req.file.path);
      fs.unlinkSync(req.file.path);
      item.imageUrl = cloudinaryResult.secure_url;
    }

    await item.save();

    res.status(200).json({ message: 'Item updated successfully', item });
  } catch (error) {
    console.error('Error updating item:', error);
    res.status(500).json({ message: 'Server error' });
  }
};