var express=require("express");
var app=express();
var fs=require("fs");
var bodyParser = require('body-parser');
var routePath="./routes/*"; //add one folder then put your route files there my router folder name is routers


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


function processRoutePath(route_path) {
     fs.readdirSync(route_path).forEach(function(file) {
        var filepath = route_path + '/' + file;
        fs.stat(filepath, function(err,stat) {
            if (stat.isDirectory()) {
                processRoutePath(filepath);
            } else {
                console.info('Loading route: ' + filepath);
                require(filepath)(app);
            }
        });
    });
}

    processRoutePath(__dirname + "/routes");

module.exports=app
module.exports.processRoutePath=processRoutePath;