const express = require("express");
const carSchema = require("../Models/Cars");
const Users = require("../Models/Users");
const router = express.Router();
<<<<<<< HEAD

/* This is a post request that is being sent to the server. */
router.post("/", (req, res) => {
  const car = carSchema(req.body);
  car
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
=======
const { validateCreate } = require("../Validators/Cars.js");

/* This is a post request that is being sent to the server. */
router.post("/", async (req, res) => {
  validateCreate;
  const car = carSchema(req.body);

  const user = await Users.findOne(car.eMail);

  if (user && user.loading === "valid") {
    if (user.roll === "admin" || user.roll === "superAdmin") {
      car
        .save()
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(500).json({ message: `${error}` }));
    } else {
      return res.status(201).json("you do not have access to this information");
    }
  } else {
    return res.status(201).json(`${eMail} Not found`);
  }
>>>>>>> 07743a4fdb39d7e9a5758f3bcb8eb0cfa3afb5fd
});

/* This is a get request that is being sent to the server. */
router.get("/", async (req, res) => {
  const { line } = req.query;
  const cars = await carSchema
    .find()
    .populate("review", { description: 1, rate: 1, user: 1 });
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
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* This is a put request that is being sent to the server. */
router.put("/:id", async (req, res) => {
  const { eMail } = req.body;
  const user = await Users.findOne(car.eMail);
  const { id } = req.params;
  const {
    brand,
    price,
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

  if (user && user.loading === "valid") {
    if (user.roll === "admin" || user.roll === "superAdmin") {
      carSchema
        .updateOne(
          { _id: id },
          {
            $set: {
              brand,
              price,
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
    } else {
      return res.status(201).json("you do not have access to this information");
    }
  } else {
    return res.status(201).json(`${eMail} Not found`);
  }
});
/* This is a delete request that is being sent to the server. */
router.delete("/:id", async (req, res) => {
  const { active, eMail } = req.body;
  const user = await Users.findOne(car.eMail);
  const { id } = req.params;
<<<<<<< HEAD
  const { active } = req.body;
  carSchema
    .updateOne({ _id: id }, { $set: { active } })
    .populate("review", { description: 1, rate: 1 })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
=======

  if (user) {
    if (user.roll === "superAdmin" && user.loading === "valid") {
      carSchema
        .updateOne({ _id: id }, { $set: { active } })
        .populate("review", { description: 1, rate: 1 })
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(500).json({ message: `${error} ` }));
    } else {
      return res.status(201).json("you do not have access to this information");
    }
  } else {
    return res.status(201).json(`${eMail} Not found`);
  }
>>>>>>> 07743a4fdb39d7e9a5758f3bcb8eb0cfa3afb5fd
});

module.exports = router;
