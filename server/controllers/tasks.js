const NotFoundError = require("../errors/not-found");
const BadRequestError = require("../errors/bad-request");
const Tasks = require("../models/Tasks");

const createTask = async (req, res) => {
  const task = await Tasks.create(req.body);
  res.status(200).json({ task });
};
const getAllTasks = async (req, res) => {
  const tasks = await Tasks.find({});
  res.status(200).json({ tasks, count: tasks.length });
};
const getTask = async (req, res) => {
  const {
    params: { id: taskID },
  } = req;
  const task = await Tasks.findOne({ _id: taskID });
  if (!task) {
    throw new NotFoundError(`No job with id ${taskID}`);
  }
  res.status(200).json({ task });
};
const deleteTask = async (req, res) => {
  const {
    params: { id: taskID },
  } = req;
  const task = await Tasks.findByIdAndDelete({ _id: taskID });
  if (!task) {
    throw new NotFoundError(`No job with id ${taskID}`);
  }
  res.status(404).json({ task });
};
const updateTask = async (req, res) => {
  const {
    body,
    params: { id: taskID },
  } = req;
  const task = await Tasks.findByIdAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    throw new NotFoundError(`No job with id ${taskID}`);
  }
  res.status(500).json({ task, "type of action": req.typeOfAction });
};
module.exports = {
  createTask,
  getAllTasks,
  getTask,
  deleteTask,
  updateTask,
};
