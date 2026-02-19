const http = require("http");

http.createServer((req,res)=>{
    res.end("Hola desde ECS 🚀");
}).listen(3000);
