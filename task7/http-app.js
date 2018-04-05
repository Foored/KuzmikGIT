const http = require("http");
const fs = require("fs");

http.createServer(function(req, res){
	if(req.url.startsWith("/")){
        let filePath = req.url.substr(1);
		if(filePath.length === 0){
			filePath = ".public/"
		}
        fs.readFile(filePath, function(error, data){
            if(error){
                res.statusCode = 404;
                res.end("Error 404");
            }
            else{
                res.end(data);
            }
            return;
        });
    }
    else{
        res.end(); 
    }
}).listen(5000, () => console.log('Server is working'));