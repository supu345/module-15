const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    firstName: { type: String, require },
    lastName: { type: String },
    gender: { type: String },
    dateOfBirth: { type: Date },
    nationality: { type: String },
    address: { type: String },
    email: { type: String },
    phone: { type: String },
    admissionDate: { type: Date, default: Date.now() },
    courses: { type: String },
  },
  { timestamps: true, versionKey: false }
);

const OrderModel = mongoose.model("Order", OrderSchema);
module.exports = OrderModel;
