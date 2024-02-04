const fs = require("fs");
const zlib = require("zlib");
const path = require("path");
const stream = require("node:stream");

const compress = () => {
  // Write your code here
  const pathInput = path.join(__dirname, "files", "fileToCompress.txt");
  const pathOutput = path.join(__dirname, "files", "archive.gz");

  const readStr = fs.createReadStream(pathInput);
  const writeStr = fs.createWriteStream(pathOutput);

  const gzip = zlib.createGzip();

  readStr.pipe(gzip).pipe(writeStr);
};
compress();
