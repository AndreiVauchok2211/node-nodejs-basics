const fs = require("node:fs");
const crypto = require("node:crypto");

const calculateHash = () => {
  // Write your code here
  const readStr = fs.createReadStream(
    __dirname + "/files/fileToCalculateHashFor.txt"
  );
  const writeStr = process.stdout;
  const hashStr = crypto.createHash("sha256");

  readStr.on("data", (data) => hashStr.update(data));
  readStr.on("end", () => {
    const hash = hashStr.digest("hex");
    writeStr.write(hash);
  });
};

calculateHash();
