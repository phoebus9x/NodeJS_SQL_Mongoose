const express = require("express");

const routerAPI = express.Router();
const {
  getUsersApi,
  postUsersApi,
  putUsersApi,
  deleteUsersApi,
  postUploadSingleFileApi,
} = require("../controllers/apiController");

const {
  getCustomersApi,
  postCustomersApi,
  postArrCustomersApi,
  putCustomerApi,
  deleteCustomerApi,
  deleteCustomersApi,
} = require("../controllers/customerApiController");

routerAPI.get("/users", getUsersApi);
routerAPI.post("/users", postUsersApi);
routerAPI.put("/users", putUsersApi);
routerAPI.delete("/users", deleteUsersApi);

routerAPI.post("/file", postUploadSingleFileApi);

routerAPI.get("/customers", getCustomersApi);
routerAPI.post("/customers", postCustomersApi);
routerAPI.post("/customers-many", postArrCustomersApi);
routerAPI.put("/customers", putCustomerApi);
routerAPI.delete("/customers", deleteCustomerApi);
routerAPI.delete("/customers-many", deleteCustomersApi);

routerAPI.get("/info", (req, res) => {
  console.log("check req.query: ", req.query);
  return res.status(200).json({
    data: req.query,
  });
});

routerAPI.get("/info/:name/:address", (req, res) => {
  console.log("check req.params: ", req.params);
  return res.status(200).json({
    data: req.params,
  });
});

module.exports = routerAPI;
