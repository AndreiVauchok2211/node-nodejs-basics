const { spawn } = require("node:child_process");

const spawnChildProcess = (args) => {
  // Write your code here
  const childProcess = spawn("node", [__dirname + "/files/script.js", ...args]);
  process.stdin.on("data", (data) => {
    childProcess.stdin.write(data);
  });
  childProcess.stdout.on("data", (data) => {
    process.stdout.write(data);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["node - v", "nmp - v"]);
