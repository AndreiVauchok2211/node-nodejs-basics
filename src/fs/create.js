
const fs = require('fs');


const create = () => {
    // Write your code here 
   fs.writeFile(
        __dirname + '/files/flesh.txt',
        'I am fresh and young',
        (err) => {
            if(err) throw err
            
        }
    )

};

create();