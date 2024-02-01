const fs = require("fs");
const zlib = require("zlib");
const path = require("path");
const stream = require("node:stream");

const decompress = () => {
  // Write your code here
  const pathOutput = path.join(__dirname, "files", "fileToCompress.txt");
  const pathInput = path.join(__dirname, "files", "archive.gz");

  const readStr = fs.createReadStream(pathInput);
  const writeStr = fs.createWriteStream(pathOutput);

  const gzip = zlib.createUnzip();

  readStr.pipe(gzip).pipe(writeStr);
};
decompress();
