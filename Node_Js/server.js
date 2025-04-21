// 1st require the module
const http = require('http');
const query = require('querystring')
let userData ='';
// secound create a server
const server = http.createServer((req,res)=>{
   req.on('data',(chunks)=>{
    console.log(chunks);
    userData += chunks.toString();
   });

   req.on('end',()=>{
    const data = query.parse(userData);
    const userName = data.userName;
    const password = data.password
    
    res.end()
   })
    // disconnect the user in the server
})

// listen the server
server.listen(5500)
