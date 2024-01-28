const parseArgs = () => {
  // Write your code here
  for (let i = 2; i < process.argv.length; i++) {
    if (process.argv[i].includes("--")) {
      console.log(`${process.argv[i]} is ${process.argv[i + 1]}`);
    }
  }
};
parseArgs();
