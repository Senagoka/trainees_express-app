const express = require("express");

const {
  createTrainee,
  getAllTrainees, getAtrainee, updateAtrainee, deleteAtrainee
} = require("../controllers/traineesController");
const router = express.Router();

router.route("/").post(createTrainee).get(getAllTrainees);
router.route("/:_id").get(getAtrainee).put(updateAtrainee).delete(deleteAtrainee)

module.exports = router;
