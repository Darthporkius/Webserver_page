//server code
var http = require('http');

http.createServer(function(request, response) {
    // Send the HTTP header
    // HTTP Status: 200 : ok
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body as "hello world"
    response.end('Hello World\n');
}).listen(6969);
////////////////

//test module code
var JSONFileReader = require('./Json-file-reader.js'),
    ourArgument = process.argv[2];

JSONFileReader.readFile('countries.json', 
function(error, data) {
    var country;

//this line checks if the json loaded
    if(error) {
        throw error;
    }
////

    data.forEach(function(element) {
        if (element.name === ourArgument) {
            country = element;
        }
    });

//this line checks if the element that you asked for 
//exsists within the json.    
    if(country){
        console.log(country);
    }else{
        console.log('This is not a registerd country.');
    };    
////
         
});