const process = require("process");

const parseEnv = () => {
  // Write your code here
  // console.log(process.env);
  Object.keys(process.env).map((key) => {
    if (key.includes("RSS")) {
      console.log(`${key}=${process.env[key]}`);
    }
  });
  // console.log(rss);
};

parseEnv();
