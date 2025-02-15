const fs = require('fs');
const http = require('http');
const port = 7800;
const localhost = '127.0.0.1'

const server = http.createServer((req,res) =>{
    fs.readFile('./Data/index.html',(error,data)=>{
        if(error){
      console.log(error)
        res.end();
        }
        else{
          res.setHeader('content-Type','text/html');
          res.write(data);
          res.end()
        }
    })
})
server.listen(port,() =>{
    console.log(`The server is running at ${localhost}:${port}`)
})
