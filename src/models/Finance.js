const financeSchema = new mongoose.Schema({
  revenue: Number,
  expenses: Number,
  debts: Number,
});
export default mongoose.model("Finance", financeSchema);
