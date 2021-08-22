const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        console.log('Home page')
    }
    if(req.url === '/about'){
        console.log('History of us')
    }
})


server.listen(5000,() => {
    console.log('Server is listen on port :5000...')
})