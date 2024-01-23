
const fs = require('fs');
// import fs from 'fs';


const create = () => {
    // Write your code here 
   fs.writeFile(
        __dirname + '/files/fresh.txt',
        'I am fresh and young',
        (err) => {
            if(err) throw new Error('Fs operation failed');
            
        }
    )

};

create();