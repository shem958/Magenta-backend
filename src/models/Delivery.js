const deliverySchema = new mongoose.Schema({
  destination: String,
  status: String,
  trackingNumber: String,
});
export default mongoose.model("Delivery", deliverySchema);
