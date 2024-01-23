const fs = require('fs');
const path = require('path')


const read =  () => {
    // Write your code here
   const stream = fs.createReadStream(path.join(__dirname, '/files/fileToRead.txt'),'utf8')
   stream.on('data', (data) => console.log(data))
   stream.on('error', () => { 
    throw new Error('Fs operation failed')
})

};

 read();