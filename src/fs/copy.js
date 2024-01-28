const fs = require("fs");

const sourseFolderPath = __dirname + "/files";
const newFolderPath = __dirname + "/files_copy";

function copy() {
  fs.stat(newFolderPath, (err) => {
    if (err) {
      fs.cp(sourseFolderPath, newFolderPath, { recursive: true }, (error) => {
        if (error) console.log(error.message);
      });
    }
    if (!err) {
      throw new Error("Fs operation failed");
    }
  });
}

copy();
