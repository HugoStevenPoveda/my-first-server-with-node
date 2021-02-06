/* const http=require('http');
const colors = require('colors');

const handleServer=function(req,res){
    res.writeHead(300,{'content-type':'text/html'});
    res.write('<h1>hello word in jaja  node.j</h1>');
    res.end();

}


const server =http.createServer(handleServer);
server.listen(3000,()=>console.log('server on port 3000'.green))
console.log("holaaa".yellow)
console.log("holaaa".inverse)
console.log("holaaa".magenta) */

const express=require('express');
const colors = require('colors')

   const server = express();
   server.get('/',(req,res)=>res.send("<h1>hola desde exprescon pity y nodejs</h1>"))
   server.listen(3000,()=> console.log("server on port 3000".magenta))




/* express().listen(3000,()=> console.log("server on port 3000".magenta))
    */
   




