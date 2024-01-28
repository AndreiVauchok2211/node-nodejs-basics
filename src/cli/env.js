const parseEnv = () => {
  // Write your code here
  Object.keys(process.env).map((key) => {
    if (key.includes("RSS")) {
      console.log(`${key}=${process.env[key]}`);
    }
  });
};

parseEnv();
