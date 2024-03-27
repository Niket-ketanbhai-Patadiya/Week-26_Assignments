// Question-06
const os=require('os')

console.log("OS type: ",os.type());

console.log("OS Release: ",os.release());

// Question-07
const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.write("<h1>I am happy to learn full stack web development from PWskills</h1>")
    }
    res.end();
})
server.listen(5005)
console.log("http server is running on port 5005");

// Question-08
const EventEmitter=require("node:events");

const emmiter=new EventEmitter();

const subscribedMessage=(channelname)=>{
    console.log(`Thanks for subscribing to ${channelname}`);
};

emmiter.addListener("subscribe",subscribedMessage);
emmiter.emit("subscribe","college Wallah");


// Question-09
