const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/'));

app.get("/", function(req,res) {
    res.render("test1",{});
})
app.get("/hello/:num", function(req,res) {
    res.render("test2",{
        num: req.params.num
    });
})
app.post("/postTest", function(req, res) {
    console.log(req.body);
    //res.json({ok:true});
    res.render("test2", {p1name: req.body.p1name, p2name: req.body.p2name, p3name: req.body.p3name, p4name: req.body.p4name })
    
})
app.listen(3000, function() {
    console.log("실행중....");
});