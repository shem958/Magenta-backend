import Inventory from "../models/Inventory.js";

// @desc    Get all inventory items (excluding soft-deleted items)
// @route   GET /api/inventory
export const getInventory = async (req, res) => {
  try {
    const items = await Inventory.find({ isDeleted: false });
    res.status(200).json({
      success: true,
      data: items,
      message: "Inventory retrieved successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
      message: "Error retrieving inventory",
      error: error.message,
    });
  }
};

// @desc    Add a new inventory item
// @route   POST /api/inventory
export const addInventory = async (req, res) => {
  try {
    const {
      name,
      category,
      quantity,
      minStockLevel,
      price,
      location,
      supplier,
    } = req.body;

    // Validate required fields
    if (!name || !category || !price || !location || !supplier?.name) {
      return res.status(400).json({
        success: false,
        data: null,
        message:
          "Missing required fields: name, category, price, location, and supplier.name are required",
      });
    }

    // Check if item already exists
    const existingItem = await Inventory.findOne({ name });
    if (existingItem) {
      return res
        .status(400)
        .json({ success: false, data: null, message: "Item already exists" });
    }

    const newItem = new Inventory({
      name,
      category,
      quantity: quantity || 0,
      minStockLevel: minStockLevel || 10,
      price,
      location,
      supplier,
    });

    await newItem.save();
    res.status(201).json({
      success: true,
      data: newItem,
      message: "Inventory item added successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
      message: "Error adding inventory item",
      error: error.message,
    });
  }
};

// @desc    Update an inventory item
// @route   PUT /api/inventory/:id
export const updateInventory = async (req, res) => {
  try {
    const {
      name,
      category,
      quantity,
      minStockLevel,
      price,
      location,
      supplier,
    } = req.body;
    const item = await Inventory.findById(req.params.id);

    if (!item || item.isDeleted) {
      return res
        .status(404)
        .json({ success: false, data: null, message: "Item not found" });
    }

    item.name = name || item.name;
    item.category = category || item.category;
    item.quantity = quantity !== undefined ? quantity : item.quantity;
    item.minStockLevel =
      minStockLevel !== undefined ? minStockLevel : item.minStockLevel;
    item.price = price !== undefined ? price : item.price;
    item.location = location || item.location;
    if (supplier) {
      item.supplier = { ...item.supplier, ...supplier };
    }

    await item.save();
    res.status(200).json({
      success: true,
      data: item,
      message: "Inventory item updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
      message: "Error updating inventory item",
      error: error.message,
    });
  }
};

// @desc    Soft delete an inventory item
// @route   DELETE /api/inventory/:id
export const deleteInventory = async (req, res) => {
  try {
    const item = await Inventory.findById(req.params.id);
    if (!item || item.isDeleted) {
      return res
        .status(404)
        .json({ success: false, data: null, message: "Item not found" });
    }

    item.isDeleted = true;
    await item.save();
    res.status(200).json({
      success: true,
      data: null,
      message: "Inventory item deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
      message: "Error deleting inventory item",
      error: error.message,
    });
  }
};

// @desc    Restore a soft-deleted inventory item
// @route   PATCH /api/inventory/restore/:id
export const restoreInventory = async (req, res) => {
  try {
    const item = await Inventory.findById(req.params.id);
    if (!item || !item.isDeleted) {
      return res
        .status(404)
        .json({
          success: false,
          data: null,
          message: "Item not found or not deleted",
        });
    }

    item.isDeleted = false;
    await item.save();
    res.status(200).json({
      success: true,
      data: item,
      message: "Inventory item restored successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
      message: "Error restoring inventory item",
      error: error.message,
    });
  }
};
