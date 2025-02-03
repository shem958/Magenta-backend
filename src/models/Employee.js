const employeeSchema = new mongoose.Schema({
  name: String,
  position: String,
  salary: Number,
  status: String,
});
export default mongoose.model("Employee", employeeSchema);
