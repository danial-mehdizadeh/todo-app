const express = require("express");

const router = express.Router();

const {
  createTask,
  getAllTasks,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/tasks");

router.route("/").post(createTask).get(getAllTasks);
router.route("/:id").get(getTask).delete(deleteTask).patch(updateTask);

module.exports = router;
