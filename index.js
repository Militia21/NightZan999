const express = requrie("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("index")
});

app.get("/about", function(req, res) {
    res.render("about")
});

app.get("/discordbot", function(req, res) {
    res.render("discordbot")
});

app.get("*", function(req, res) {
    res.render("404")
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server up!")
});
