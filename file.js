const fs = require('fs');
const http = require('http');
// fs.readFile('./File/file.txt',(error,data) =>{
//     if(error){
//   console.log(error)
//     }
//     console.log(data.toString())
// })

//Write file
// fs.writeFile('./File/file.txt', 'File is being written in',() =>{
//     console.log('The file written successfully!')
// })

// fs.writeFile('./File/file.txt2', 'File is being written in again',() =>{
//     console.log('The file written so successfully!')
// })

//Make directories 

// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets',(error) =>{
//         if(error){
//          console.log(error)
//         }
//          console.log('Folder created!')
//     })
// }
// else{
//     fs.rmdir('./assets',(error) =>{
//         if(error){
//          console.log(error)
//         }
//          console.log('Folder deleted')
//     })
// }

// if(fs.existsSync('./File/file.txt2')){
//   fs.unlink('./File/file.txt2',(err) =>{
//     if(err){
//         console.log(err)
//     }
//     console.log('file deleted') 
//   })
// }
// const word = 'Lorem ipsum dolor sit amet\n'.repeat(1000);
// fs.writeFileSync('./Data/word.txt',word,"utf8")
//     console.log('successful!')

// const readStream = fs.createReadStream('./Data/word.text');
// const writeStream = fs.createWriteStream('./Data/word.text');

// readStream.on('data',(chunk) =>{
//     console.log('---NEW CHUNK---');
//     console.log(chunk.toString());
//     writeStream.write(chunk);
// })

const server = http.createServer((req,res) =>{
    res.setHeader('content-Type', 'text/html');
    fs.readFile('./Data/index.html',(error,data) =>{
        if(error){
        console.log(error)
        }
        res.write(data);
        res.end();
      })  
}).listen(5400,() =>{
   console.log('server running at localhost:5400')
})

