const http = require('http');
const Promise = require('bluebird');
const fs = require('fs');

const read_dir = Promise.promisify(fs.readdir);
const read_file = Promise.promisify(fs.readFile);
const write_file = Promise.promisify(fs.writeFile);
const read_file_async = Promise.promisify(fs.readFileAsync);

read_dir('./leads')
.then(fileNames=>{
    console.log("filePath", fileNames);
    
    Promise.map(fileNames, function(fileName) {
        read_file(`./leads/${fileName}`, 'utf-8')
        .then(fileName =>{
            console.log(fileName.length);
       });
    }).then(function() {
        console.log("done");
    });
})


