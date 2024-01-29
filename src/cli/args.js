const parseArgs = () => {
  // Write your code here
  for (let i = 2; i < process.argv.length; i++) {
    if (process.argv[i].includes("--")) {
      console.log(`${process.argv[i].substring(2)} is ${process.argv[i + 1]}`);
    }
  }
};
parseArgs();
