const express = require("express");

const router = express.Router();

const auth = require("../middleware/validator");
const { login } = require("../controllers/login");
const {
  createMember,
  getAllMembers,
  getMember,
  deleteMember,
  searchMember,
  updateMember,
} = require("../controllers/members");

router.route("/register").post(createMember);
router.route("/board").get(getAllMembers);
router
  .route("/profile/:id")
  .get(getMember)
  .delete(auth, deleteMember)
  .patch(updateMember);
router.route("/search").post(searchMember);
router.route("/login").post(login);

module.exports = router;
