const stream = require("node:stream");

const transform = () => {
  // Write your code here
  const transformStr = new stream.Transform({
    transform(chunk, encoding, cb) {
      const chunkStr = chunk.toString().trim();
      const reversChunk = chunkStr.split("").reverse().join("");

      this.push(reversChunk);
      cb();
    },
  });

  stream.pipeline(process.stdin, transformStr, process.stdout, (err) =>
    console.log(err.message)
  );
};

transform();
