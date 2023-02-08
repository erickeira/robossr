var http = require('http');
const axios = require('axios');


// Setting up PORT
const PORT = process.env.PORT || 3002;
  
// Creating http Server

var httpServer = http.createServer(async function(request, response){
    const url = "https://hotsitessr-930.pages.dev/";
    const {data} = await axios.get(url);
    var html = buildHtml(data);

    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': data.length,
        'Expires': new Date().toUTCString()
    });
    response.end(html);
});
  
// Listening to http Server
httpServer.listen(PORT, () => {
    console.log("Server is running at port 3002...");
});

function buildHtml(data) {
    var header = '';
    var body = '';
  
    // concatenate header string
    // concatenate body string
  
    return '<!DOCTYPE html>'
         + '<html><head>' + header + '</head><body>' + data + '</body></html>';
};