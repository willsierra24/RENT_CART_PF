const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  dni: {
    type: Number,
    require: true,
    unique: true,
    minLength: 7,
    maxLength:10
  },
  kindOfPerson: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 15,
  },
  eMail: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    ref: "Location",
    required: true,
  },
  telephone: {
    type: String,
    required: true,
    unique: true,
    minLength: 10,
  },
  roll: {
    type: String,

    enum: ["admin", "user", "superAdmin"],

    enum: ["user", "admin", "superAdmin"],

    default: "user",
  },
  dni: {
    type: Number,
    require: true,
    unique: true,
    minLength: 7,
    maxLength: 10,
  },
  active: {
    type: String,
    enum: ["valid", "invalid"],
    default: "valid",
  },
  review: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Review",
    },
  ],
  reviewAccesories: [
    {
      type: mongoose.Types.ObjectId,
      ref: "ReviewAccessories",
    },
  ],
<<<<<<< HEAD
=======

  review: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Review",
    },
  ],
  password: {
    type: String,
    required: true,
  },

  favorite: {
    type: Array,
  },

  loading: {
    type: String,
    enum: ["valid", "invalid"],
    default: "invalid",
  },
>>>>>>> 07743a4fdb39d7e9a5758f3bcb8eb0cfa3afb5fd
});

module.exports = mongoose.model("Users", userSchema);

//admin nombre apellido email password
// incriptar password
// password para user
// hacer el pdf mero capricho
// mercado pago
