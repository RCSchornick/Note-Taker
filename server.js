var express = require("express");
const htmlroutes=require("./routes/htmlroutes.js")
const apiroutes = require("./routes/apiroutes.js")

var app = express();
var PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api",apiroutes)
app.use("/", htmlroutes)

app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
});