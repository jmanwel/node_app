const http = require('http');
const port = 3000;
const hostname = 'localhost';

const server = http.createServer((req,res)=>{
    res.setHeader("Content-type", "text/plain");
    res.write("Welcome to jmg")
    console.log("request url", req.url)
    console.log("request method", req.method)

})


server.listen(port, hostname, ()=>{
    console.log(`listening on port ${port}`)
})