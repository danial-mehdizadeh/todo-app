const NotFoundError = require("../errors/not-found");
const BadRequestError = require("../errors/bad-request");

const Members = require("../models/Members");
const createMember = async (req, res) => {
  const member = await Members.create(req.body);
  res.status(200).json({ member });
};

const getAllMembers = async (req, res) => {
  const members = await Members.find({});
  res.status(200).json({ members, count: members.length });
};
const searchMember = async (req, res) => {
  const members = await Members.find({ name: { $regex: req.body.name } });
  res.status(200).json({ members, count: members.length });
};
const getMember = async (req, res) => {
  const {
    params: { id: memberID },
  } = req;
  const member = await Members.findOne({ _id: memberID });
  if (!member) {
    throw new NotFoundError(`No job with id ${memberID}`);
  }
  res.status(200).json({ member });
};

const deleteMember = async (req, res) => {
  const {
    params: { id: memberID },
  } = req;
  const member = await Members.findByIdAndDelete({ _id: memberID });
  if (!member) {
    throw new NotFoundError(`No job with id ${memberID}`);
  }
  res.status(404).json({ member });
};
const updateMember = async (req, res) => {
  const {
    body,
    params: { id: memberID },
  } = req;
  const member = await Members.findByIdAndUpdate({ _id: memberID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!member) {
    throw new NotFoundError(`No job with id ${memberID}`);
  }
  res.status(500).json({ member });
};
module.exports = {
  createMember,
  getAllMembers,
  getMember,
  searchMember,
  deleteMember,
  updateMember,
};
