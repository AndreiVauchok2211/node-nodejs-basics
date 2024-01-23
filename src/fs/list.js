const fs = require('fs');
const path = require('path')

const list =  () => {
    // Write your code here 
    fs.readdir(path.join(__dirname, '/files'), (err, files) => {
        if(err) throw new Error('Fs operation failed');
        console.log(files);
    })

};

 list();