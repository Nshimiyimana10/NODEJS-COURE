const fs = require('fs');
const word = 'Lorem ipsum dolor sit amet\n'.repeat(1000);
fs.writeFileSync('./Data/word.txt',word,"utf8")
    console.log('successful!')

const readStream = fs.createReadStream('./Data/word.text');
const writeStream = fs.createWriteStream('./Data/word.text');

readStream.on('data',(chunk) =>{
    console.log('---NEW CHUNK---');
    console.log(chunk.toString());
    writeStream.write(chunk);
})
