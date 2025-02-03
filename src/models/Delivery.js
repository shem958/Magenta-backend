import mongoose from "mongoose";

const deliverySchema = new mongoose.Schema(
  {
    destination: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "Pending",
    },
    trackingNumber: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Delivery", deliverySchema);
