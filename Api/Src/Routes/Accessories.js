const express = require("express");
const accessoriesSchema = require("../Models/Accessories");
const router = express.Router();
const {validateCreate} = require('../Validators/Accessories.js');


/* This is a post request that is saving the data to the database. */
router.post("/", (req, res) => {
  validateCreate
  const accessories = accessoriesSchema(req.body);
  accessories
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* This is a get request that is getting the data from the database. */
router.get("/", async (req, res) => {
  const { name } = req.query;
  const accessories = await accessoriesSchema
    .find()
    .populate("reviewAccesories", { description: 1, rate: 1, user: 1 })
    .populate("billing", {
      invoice_number: 1,
      full_value: 1,
      discount: 1,
      car: 1,
      user: 1,
      accessories: 1,
    });

  try {
    if (name) {
      let accessorieName = accessories.filter((accessorie) =>
        accessorie.name.toLowerCase().includes(name.toLowerCase())
      );
      accessorieName.length
        ? res.status(200).json(accessorieName)
        : res.status(201).json("Not found");
    } else {
      res.status(200).json(accessories);
    }
  } catch (error) {
    res.send(`Error ${error}`);
  }
});

/* This is a get request that is getting the data from the database. */
router.get("/:id", (req, res) => {
  const { id } = req.params;
  accessoriesSchema

    .findById(id)
    .populate("review", { description: 1, rate: 1 })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* This is a put request that is updating the data from the database. */
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, preci, description, image, discount } = req.body;
  accessoriesSchema

    .updateOne(
      { _id: id },
      { $set: { name, preci, description, image, discount } }
    )
    .populate("review", { description: 1, rate: 1 })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  accessoriesSchema

    .updateOne({ _id: id }, { $set: { status } })
    .populate("review", { description: 1, rate: 1 })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
