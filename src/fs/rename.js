const fs = require("fs");

const rename = () => {
  // Write your code here
  fs.rename(
    __dirname + "/files/wrongFilename.txt",
    __dirname + "/files/properFilename.md",
    (err) => {
      if (err) throw new Error("Fs operation failed");
    }
  );
};

rename();
