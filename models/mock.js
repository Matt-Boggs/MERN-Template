const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mockSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Mock = mongoose.model("Mock", mockSchema);

module.exports = Mock;
