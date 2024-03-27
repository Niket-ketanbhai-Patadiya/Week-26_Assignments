const fs = require('fs');

// Question-02
const data = 'Node.js tackles concurrency through a single-threaded event loop with an asynchronous and non-blocking I/O model. This means it can handle many requests at once by queuing them up and focusing on tasks that don\'t require waiting, allowing it to efficiently manage I/O-intensive applications. JSK';

fs.writeFile('nodeJs_architecture.txt', data,'utf8', function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log("Success in writing a file");
    }
});

// Question - 03
fs.readFile('nodeJs_architecture.txt','utf-8',(err,data)=>{
    if(err){
        console.err("Error in reading a file",err);
        return
    }
        console.log("Content of File");
        console.log(data);
    
})

// Question-04
fs.appendFile('nodeJs_architecture.txt','--Content Created By Niket Patadiya',function(err){
    if (err) {
        console.error("Error in Appending File",err);
    } else {
        console.log("Success in Appending a file");
    }
})

// Question-05
fs.unlink('nodeJs_architecture.txt',function(err){
        if(err){
            console.log('Error in deleting a file!');
        }else{
            console.log("Success in deleting a file");
        }
    })