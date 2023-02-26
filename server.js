const http=require('http')
const server=http.createServer((req,res)=>{
    
    if(req.url=='/home'){
        res.statusCode=200
       res.write('welcome to home')
    }else if(req.url=='/contact'){
        res.statusCode=200
        res.write('welcome to contact')
    }else if(req.url=='/about'){
        res.write('welcome to about')
    }else{
        res.statusCode=404
        res.write('not found')
        
    }
    
    res.end()

})
server.listen(5000,()=>(console.log('server running')))