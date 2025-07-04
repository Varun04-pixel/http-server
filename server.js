const fs = require('fs')
const path = require("path")
const http = require("http")
const root_path = './webpage'

const server = http.createServer((req,res)=>{
    let file_path = '.' + req.url
    if(file_path === './') {
        file_path = root_path+'/prac.html'
    } else {
        file_path = root_path + req.url
    }
    let mime = {
        '.html':'text/html',
        '.css':'text/css',
        '.js':'text/javascript'
    }
    fs.readFile(file_path,(err,data)=>{
        if(err) {
            res.statusCode = 404
            res.end("<h1>404 - Page not found</h1>")
        } else {
            res.statusCode = 200
            res.setHeader('Content-Type',mime[path.extname(file_path)])
            res.end(data)
        }
    })
})

server.listen(3000, ()=>{
    console.log("App is running on http://localhost:3000");
})