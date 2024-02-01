const fs = require("fs");
const path = require("path");

const read = () => {
  // Write your code here
  const pathToFile = path.join(__dirname, "files", "fileToRead.txt");
  const readStr = fs.createReadStream(pathToFile, { encoding: "utf8" });
  readStr.pipe(process.stdout);
};

read();
