const fs = require("fs");
const path = require("path");

const write = () => {
  // Write your code here
  const pathToFile = path.join(__dirname, "files", "fileToWrite.txt");
  const writeStr = fs.createWriteStream(pathToFile, { encoding: "utf8" });
  process.stdin.pipe(writeStr);
};

write();
