const User = require("../models/user");

const {
  uploadSingleFile,
  uploadMultipleFile,
} = require("../services/fileService");

const getUsersApi = async (req, res) => {
  let results = await User.find({});
  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};

const postUsersApi = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  let user = await User.create({
    name,
    email,
    city,
  });
  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};

const putUsersApi = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  let userId = req.body.userId;

  let user = await User.updateOne(
    { _id: userId },
    { name: name, email: email, city: city }
  );
  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};

const deleteUsersApi = async (req, res) => {
  let userId = req.body.userId;
  // await deleteUserById(userId);
  let result = await User.deleteOne({
    _id: userId,
  });
  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};

const postUploadSingleFileApi = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  let result = await uploadSingleFile(req.files.image);
  console.log("check result: ", result);

  return res.send("upload ok");
};

module.exports = {
  getUsersApi,
  postUsersApi,
  putUsersApi,
  deleteUsersApi,
  postUploadSingleFileApi,
};
