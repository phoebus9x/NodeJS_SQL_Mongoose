const path = require("path");

const uploadSingleFile = async (objectFile) => {
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let uploadPath = path.resolve(__dirname, "../public/images/upload");
  let extName = path.extname(objectFile.name);

  let baseName = path.basename(objectFile.name, extName);

  let finalName = `${baseName}-${Date.now()}${extName}`;
  let finalPath = `${uploadPath}/${finalName}`;

  // Use the mv() method to place the file somewhere on your server
  try {
    await objectFile.mv(finalPath);
    console.log("upload file success");
    return {
      status: "success",
      path: finalName,
      error: null,
    };
  } catch (error) {
    console.log("check error: ", error);
    return {
      status: "failed",
      path: null,
      error: JSON.stringify(error),
    };
  }
};

const uploadMultipleFile = () => {};

module.exports = {
  uploadSingleFile,
  uploadMultipleFile,
};
