const express = require("express");

const router = express.Router();

const { uploadFile } = require("../middleware/upload");

const { auth } = require("../middleware/auth");

const { register, login, checkAuth } = require("../controller/auth");

const {
  createGroupLink,
  getGroupLink,
  getOneGroup,
  editGroup,
  deleteGroup,
  getUniqueLink,
  viewAccount,
} = require("../controller/groupLink");

const { getUser, editUser } = require("../controller/user");

const { addLink, editLink, getLink } = require("../controller/link");

router.post("/register", register);
router.post("/login", login);
router.get("/checkAuth", auth, checkAuth);

router.post("/grouplink", auth, uploadFile("brandImage"), createGroupLink);
router.get("/getGroup", auth, getGroupLink);
// router.get("/getOneGroup/:id", getOneGroup);
router.patch("/editGroup/:id", editGroup);
router.delete("/deleteGroup/:id", deleteGroup);
router.get("/getOneGroup/:id", getUniqueLink);
router.patch("/viewAccount/:id", viewAccount);

router.post("/addLink", uploadFile("linkImage"), addLink);
router.get("/getLink/:id", getLink);
router.patch("/editLink/:id", editLink);

router.get("/user", auth, getUser);
router.patch("/edituser", auth, editUser);

module.exports = router;
