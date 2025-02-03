import mongoose from "mongoose";

const financeSchema = new mongoose.Schema(
  {
    revenue: {
      type: Number,
      required: true,
      default: 0,
    },
    expenses: {
      type: Number,
      required: true,
      default: 0,
    },
    debts: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Finance", financeSchema);
