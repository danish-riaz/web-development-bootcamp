const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const items = [];

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
    res.render("index", {
        newlyAddedItem: items
    });

});

app.post("/", function (req, res) {
    items.push(req.body.newItem);
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("Server Running at port 3000.")
})