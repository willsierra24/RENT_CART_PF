const mongoose = require("mongoose");

const accessoriesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 50,
  },
  preci: {
    type: Number,
    required: true,
    minLength: 1,
  },
  description: {
    type: String,
    required: true,
    minLength: 30,
    maxLength: 500,
  },
  image: {
    type: String,
    required: true,
    default:
      "https://actionaudiostore.com/images/accessories/car-accessories-png-5.png",
  },
  status: {
    type: String,
    enum: ["valid", "invalid"],
    default: "valid",
  },
  discount: {
    type: Number,
    default: 0,
<<<<<<< HEAD
    maxLength: 99,
=======
    minLength: 1,
    maxLength: 3,
>>>>>>> 07743a4fdb39d7e9a5758f3bcb8eb0cfa3afb5fd
  },
  review: [
    {
      type: mongoose.Types.ObjectId,
      ref: "ReviewAccessories",
    },
  ],

  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
});

module.exports = mongoose.model("Accesories", accessoriesSchema);
