const express = require("express");
const carSchema = require("../Models/Cars");
const Users = require("../Models/Users");
const router = express.Router();
const {validateCreate} = require('../Validators/Cars.js');

/* This is a post request that is being sent to the server. */
router.post("/", (req, res) => {
  validateCreate
  const car = carSchema(req.body);
  car
    .save()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: `${error}` }));
});

/* This is a get request that is being sent to the server. */
router.get("/", async (req, res) => {
  const { line } = req.query;
  const cars = await carSchema
    .find()
    .populate("review", { description: 1, rate: 1, user: 1 })
    .populate("billing", {
      invoice_number: 1,
      full_value: 1,
      discount: 1,
      user: 1,
      accessories: 1,
    });
  try {
    if (line) {
      let carsLine = cars.filter((car) =>
        car.line.toLowerCase().includes(line.toLowerCase())
      );
      carsLine.length
        ? res.status(200).json(carsLine)
        : res.status(201).json("Not found");
    } else {
      res.status(200).json(cars);
    }
  } catch (error) {
    res.send(`Error ${error}`);
  }
});

/* This is a get request that is being sent to the server. */
router.get("/:id", (req, res) => {
  const { id } = req.params;
  carSchema
    .findById(id)
    .populate("review", { description: 1, rate: 1 })
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: `${error}` }));
});

/* This is a put request that is being sent to the server. */
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const {
    brand,
    preci,
    description,
    fuelConsumption,
    location,
    colour,
    discount,
    doors,
    line,
    category,
    fuelType,
    typeOfBox,
    licensePlate,
    image,
  } = req.body;
  carSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          brand,
          preci,
          description,
          fuelConsumption,
          location,
          colour,
          discount,
          doors,
          line,
          category,
          fuelType,
          typeOfBox,
          licensePlate,
          image,
        },
      }
    )
    .populate("review", { description: 1, rate: 1 })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* This is a delete request that is being sent to the server. */
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const { active } = req.body;
  carSchema
    .updateOne({ _id: id }, { $set: { active } })
    .populate("review", { description: 1, rate: 1 })
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: `${error} ` }));
});

module.exports = router;
