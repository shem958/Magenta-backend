import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    category: { type: String, required: true }, // New field for categorization
    quantity: { type: Number, required: true, default: 0 },
    minStockLevel: { type: Number, required: true, default: 10 }, // Stock alert threshold
    price: { type: Number, required: true },
    location: { type: String, required: true },
    supplier: {
      name: { type: String, required: true },
      contact: { type: String },
    }, // Supplier details
    isDeleted: { type: Boolean, default: false }, // Soft delete option
  },
  { timestamps: true }
);

// Middleware to check for low stock before saving
inventorySchema.pre("save", function (next) {
  if (this.quantity < this.minStockLevel) {
    console.warn(`Warning: Low stock for ${this.name}`);
  }
  next();
});

export default mongoose.model("Inventory", inventorySchema);
