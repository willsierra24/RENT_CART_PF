const express = require("express");
const userSchema = require("../Models/Users");
const router = express.Router();

// Create user

router.post("/", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
// router.get("/", (req, res) => {
//   userSchema
//     .find()
//     .populate("review", { description: 1, rate: 1, car: 1 })
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

router.get("/", async (req, res) => {
  const { dni } = req.query;

  const users = await userSchema
    .find()
    .populate("review", { description: 1, rate: 1, car: 1 });
  try {
    if (dni) {
      let userDni = users.filter((user) => user.dni === Number(dni));
      userDni.length
        ? res.status(200).json(userDni)
        : res.status(201).json("Not found");
    } else {
      res.status(200).json(users);
    }
  } catch (error) {
    res.json(`Error ${error}`);
  }
});

// get a user
router.get("/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .populate("review", { description: 1, rate: 1, car: 1 })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, lastName, kindOfPerson, eMail, location, telephone } = req.body;
  userSchema
    .updateOne(
      { _id: id },
      { $set: { name, lastName, kindOfPerson, eMail, location, telephone } }
    )
    .populate("review", { description: 1, rate: 1 })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const { active } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { active } })
    .populate("review", { description: 1, rate: 1 })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
