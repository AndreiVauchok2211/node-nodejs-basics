const fs = require('fs');
const path = require('path');

const remove =  () => {
    // Write your code here 
    fs.unlink(path.join(__dirname, '/files/fileToRemove.txt'), err => {
        if(err) throw new Error('Fs operation failed')
    })

};

 remove();