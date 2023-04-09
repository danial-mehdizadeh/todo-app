const express = require("express");

const router = express.Router();

const {
  createMember,
  getAllMembers,
  getMember,
  deleteMember,
  updateMember,
} = require("../controllers/members");

router.route("/register").post(createMember);
router.route("/board").get(getAllMembers);
router
  .route("/profile/:id")
  .get(getMember)
  .delete(deleteMember)
  .patch(updateMember);

module.exports = router;
