import mongoose from "mongoose";
const inventorySchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  location: String,
});
export default mongoose.model("Inventory", inventorySchema);
