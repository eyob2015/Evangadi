const http = require('http')
const os = require('os')
const fs = require('fs')
const { resolve4 } = require('dns')

console.log(__dirname)
console.log(__filename)




myport = http.createServer((req, res) => {
    let requestedfile = __dirname + '/index.html'
    

    if (req.url === '/index.html') {

        fs.readFile(requestedfile, (err, data) => {
            if (err) { console.log(err) }
            res.write(data)
            res.end()
        })
        
      
       
    }
    //   if (req.url === "/about") {
    //     res.write("<h1>helloabout </h1>");
    //     res.end();
    //   } else res.write("error page");
    // res.end()
    
})

PORT = 5000

myport.listen(PORT)
console.log(`created at localhost:${PORT}`)


