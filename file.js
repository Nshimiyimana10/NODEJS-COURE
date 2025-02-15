const fs = require('fs');
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

if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(error) =>{
        if(error){
         console.log(error)
        }
         console.log('Folder created!')
    })
}
else{
    fs.rmdir('./assets',(error) =>{
        if(error){
         console.log(error)
        }
         console.log('Folder deleted')
    })
}
