const mongoose = require("mongoose");
const billingSchema = mongoose.Schema({
  invoice_number: {
    type: String,
    minLength: 4,
    unique: true,
    required: true,
  },

  full_value: {
    type: Number,
    default: 0,
    minLength: 0,
    required: true,
  },

  user: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
  },

  car: {
    type: mongoose.Types.ObjectId,
    ref: "Cars",
  },

  accessories: {
    type: Array(mongoose.Types.ObjectId),
    ref: "Accessories",
  },

  discount: {
    type: Number,
    default: 0,
    minLength: 0,
    maxLength: 99,
  },

  active: {
    type: String,
    enum: ["valid", "invalid"],
    default: "valid",
  },
  Deadline_iso: {
    type: Date,
    required: true,
  },
  rentalDate_iso: {
    type: Date,
    required: true,
  },
});

billingSchema
  .virtual("rentalDate")
  .set(function (date) {
    this.rentalDate_iso = new Date(date);
  })
  .get(function () {
    return this.rentalDate_iso.toISOString().substring(0, 10);
  });

billingSchema
  .virtual("Deadline")
  .set(function (date) {
    this.Deadline_iso = new Date(date);
  })
  .get(function () {
    return this.Deadline_iso.toISOString().substring(0, 10);
  });

module.exports = mongoose.model("Billings", billingSchema);
