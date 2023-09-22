const express = require("express");
const {
  getHomepage,
  getAbc,
  getQuery,
  postCreateUser,
  getCreatePage,
  getSearch,
  getUpdate,
  postUpdateUser,
  postDeleteUser,
  postRemoveUser,
} = require("../controllers/homeController");
const router = express.Router();

// khai báo routes
router.get("/", getHomepage);

router.get("/create", getCreatePage);

router.post("/create-user", postCreateUser);

router.get("/abc", getAbc);

router.get("/query", getQuery);

router.get("/search", getSearch);

router.get("/update/:id", getUpdate);

router.post("/update-user", postUpdateUser);

router.post("/delete-user/:id", postDeleteUser);

router.post("/delete-user", postRemoveUser);

module.exports = router;
